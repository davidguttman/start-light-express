import * as auth from './auth.js'

// API utility with centralized error handling
export { apiCall }

async function apiCall(url, options = {}) {
  try {
    // Get auth token for authenticated requests
    const authState = auth.getAuthState()
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }
    
    // Add Authorization header if user is logged in
    if (authState.isLoggedIn && authState.authToken) {
      headers.Authorization = `Bearer ${authState.authToken}`
    }
    
    const response = await fetch(url, {
      ...options,
      headers
    })

    // Handle 401 - Unauthorized and 403 - Forbidden  
    if (response.status === 401 || response.status === 403) {
      console.log(`${response.status} ${response.status === 401 ? 'Unauthorized' : 'Forbidden'} - redirecting to login`)
      
      // Clear auth state since token is invalid/insufficient
      auth.clearAuthState()
      
      // Get the error message from the server
      let errorMessage = response.status === 401 
        ? 'Your session has expired. Please sign in again.'
        : 'Access denied. Please sign in with an authorized account.'
        
      try {
        const errorData = await response.json()
        if (errorData.error) {
          errorMessage = errorData.error
        } else if (errorData.message) {
          errorMessage = errorData.message
        }
      } catch (jsonError) {
        // If response isn't JSON, use the default message
        console.log(`Non-JSON ${response.status} response, using default message`)
      }
      
      // Store error message for login page
      sessionStorage.setItem('authError', errorMessage)
      
      // Redirect to login
      window.location.hash = '/login'
      
      // Throw error to prevent further processing
      throw new Error('Authentication required')
    }

    // Handle other HTTP errors
    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`
      
      try {
        const errorData = await response.json()
        if (errorData.error) {
          errorMessage = errorData.error
        } else if (errorData.message) {
          errorMessage = errorData.message
        }
      } catch (jsonError) {
        // If response isn't JSON, use the default message
        console.log('Non-JSON error response:', jsonError)
      }
      
      throw new Error(errorMessage)
    }

    return response
  } catch (error) {
    // Re-throw the error so calling code can handle it
    throw error
  }
}