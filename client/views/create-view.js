import html from 'nanohtml'
import morph from 'nanomorph'

import createState from '../state.js'

// Build a view factory with sane defaults and gotchas handled.
// Usage in a view file:
//   const render = (state, params) => html`...`
//   const onMount = (state, params) => { /* fetch, timers, etc. */ }
//   export default createView({ render, onMount, initialState })
export default function createViewFactory({ render, onMount, onDestroy, initialState = {} }) {
  if (typeof render !== 'function') {
    throw new Error('createView requires a render(state, params) function')
  }

  return function createView(params) {
    const state = createState(initialState)

    let tree = render(state, params)
    const container = html`<div class="view-root">${tree}</div>`

    let scheduled = false

    function update() {
      console.log('update')
      if (scheduled) return

      scheduled = true
      Promise.resolve().then(() => {
        scheduled = false
        tree = morph(tree, render(state, params))
      })
    }

    state.on('*', update)

    // Always defer onMount to next microtask so DOM is mounted and styles apply
    if (typeof onMount === 'function') {
      console.log('onMount')
      Promise.resolve().then(() => {
        // The view may have been unmounted synchronously after creation
        onMount(state, params)
      })
    }

    return container
  }
}


