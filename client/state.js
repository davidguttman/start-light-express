import set from 'lodash.set'
import Emitter from 'wildemitter'

export default function createState (initialState = {}) {
  const state = new Emitter()
  state.set(initialState)
  return state
}

Emitter.prototype.set = function (
  path,
  value,
  opts = { silent: false, prefix: '' }
) {
  if (typeof path === 'object' && !Array.isArray(path)) {
    opts = value || opts
    return Object.entries(path).forEach(([key, val]) => {
      this.set(key, val, opts)
    })
  }

  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const fullPath = opts.prefix ? `${opts.prefix}.${path}` : path
    Object.entries(value).forEach(([key, val]) => {
      this.set(`${fullPath}.${key}`, val, opts)
    })
  }

  const fullPath = opts.prefix ? `${opts.prefix}.${path}` : path
  set(this, fullPath, value)
  if (!opts.silent) {
    this.emit(path, value)
  }

  return value
}
