const html = require('nanohtml')
const morph = require('nanomorph')

const state = require('./state')()
const { apiCall } = require('./api')

module.exports = function (params) {
  const tree = render()
  
  // Load widgets on component mount
  loadWidgets()
  
  state.on('*', key => morph(tree, render()))
  return tree
}

async function loadWidgets() {
  try {
    state.set({ loading: true, error: null })
    
    const response = await apiCall('/api/widgets')
    const widgets = await response.json()
    state.set({ widgets, loading: false })
  } catch (error) {
    console.error('Failed to load widgets:', error)
    // Don't set error if it's a session expiry (401) - user will be redirected
    if (error.message !== 'Session expired') {
      state.set({ 
        error: error.message || 'Failed to load widgets. Please check if the server is running.',
        loading: false 
      })
    }
  }
}

async function createWidget(event) {
  event.preventDefault()
  
  const form = event.target
  const formData = new FormData(form)
  
  const widget = {
    name: formData.get('name'),
    quantity: parseInt(formData.get('quantity'), 10),
    metadata: {
      description: formData.get('description')
    }
  }

  try {
    const response = await apiCall('/api/widgets', {
      method: 'POST',
      body: JSON.stringify(widget)
    })

    // Reload widgets after successful creation
    form.reset()
    loadWidgets()
    state.set({ success: 'Widget created successfully!' })
    
    // Clear success message after 3 seconds
    setTimeout(() => state.set({ success: null }), 3000)
  } catch (error) {
    console.error('Failed to create widget:', error)
    // Don't set error if it's a session expiry (401) - user will be redirected
    if (error.message !== 'Session expired') {
      state.set({ error: error.message || 'Failed to create widget. Please try again.' })
    }
  }
}

async function deleteWidget(id) {
  if (!confirm('Are you sure you want to delete this widget?')) {
    return
  }

  try {
    const response = await apiCall(`/api/widgets/${id}`, {
      method: 'DELETE'
    })

    // Reload widgets after successful deletion
    loadWidgets()
    state.set({ success: 'Widget deleted successfully!' })
    
    // Clear success message after 3 seconds
    setTimeout(() => state.set({ success: null }), 3000)
  } catch (error) {
    console.error('Failed to delete widget:', error)
    // Don't set error if it's a session expiry (401) - user will be redirected
    if (error.message !== 'Session expired') {
      state.set({ error: error.message || 'Failed to delete widget. Please try again.' })
    }
  }
}

function render() {
  return html`
    <div class="content">
      <h1>Widget Management</h1>
      
      ${state.error ? html`<div class="error">${state.error}</div>` : ''}
      ${state.success ? html`<div class="success">${state.success}</div>` : ''}
      
      <h2>Create New Widget</h2>
      <form onsubmit=${createWidget}>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="0" required>
        </div>
        
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" name="description" rows="3"></textarea>
        </div>
        
        <button type="submit" class="btn">Create Widget</button>
      </form>

      <h2>Existing Widgets</h2>
      
      ${state.loading ? html`
        <div class="loading">Loading widgets...</div>
      ` : ''}
      
      ${state.widgets && state.widgets.length > 0 ? html`
        <div class="widget-list">
          ${state.widgets.map(widget => html`
            <div class="widget-item">
              <h3>${widget.name}</h3>
              <div class="widget-meta">
                <p><strong>Quantity:</strong> ${widget.quantity}</p>
                ${widget.metadata && widget.metadata.description ? html`
                  <p><strong>Description:</strong> ${widget.metadata.description}</p>
                ` : ''}
                <p><strong>Created:</strong> ${new Date(widget.dateCreated).toLocaleDateString()}</p>
                <p><strong>ID:</strong> <code>${widget._id}</code></p>
              </div>
              <button 
                class="btn btn-secondary" 
                onclick=${() => deleteWidget(widget._id)}
              >
                Delete
              </button>
            </div>
          `)}
        </div>
      ` : state.widgets && state.widgets.length === 0 ? html`
        <p>No widgets found. Create your first widget above!</p>
      ` : ''}
    </div>
  `
}