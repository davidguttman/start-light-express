async function getAuthMiddleware() {
  if (process.env.NODE_ENV === 'test') {
    const { default: authTestMiddleware } = await import('./auth-test.js')
    return authTestMiddleware
  } else {
    const { default: authMiddleware } = await import('./auth.js')
    return authMiddleware
  }
}

const authMiddleware = await getAuthMiddleware()

export default [authMiddleware] 