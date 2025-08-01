const state = require('./state')
const { apiHost } = require('./config')

const EXP_CHECK_INTERVAL = 1000 * 60 * 60 // 1 hour

const { email, authToken, exp } = load()

const auth = state({
  email,
  authToken,
  exp,
  error: null
})

auth.on('*', () => {
  window.localStorage.setItem(
    'auth',
    JSON.stringify({
      email: auth.email,
      authToken: auth.authToken,
      exp: auth.exp
    })
  )
})

setInterval(expCheck, EXP_CHECK_INTERVAL)

module.exports = {
  auth,
  signOut,
  isSignedIn,
  requestSignInEmail,
  signInWithCode,
  storeIcs,
  getIcsUrl,
  get,
  put,
  list,
  del
}

async function requestSignInEmail (email) {
  const res = await fetch(`${apiHost}/auth/signin-email`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, origin: window.location.origin })
  })

  if (!res.ok) {
    throw new Error(await res.text())
  }

  return res.json()
}

async function signInWithCode ({ email, code }) {
  console.log('Signing in with code:', email, code)
  const res = await fetch(`${apiHost}/auth/signin-code`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, code })
  })

  if (!res.ok) {
    throw new Error(await res.text())
  }

  const response = await res.json()
  console.log(response)

  auth.set({
    email: response.email,
    authToken: response.authToken,
    exp: response.exp
  })

  return {
    email: response.email,
    authToken: response.authToken,
    exp: response.exp
  }
}

async function storeIcs (icsString) {
  if (!isSignedIn()) {
    throw new Error('Not signed in')
  }

  const res = await fetch(`${apiHost}/ics`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.authToken}`
    },
    body: JSON.stringify({ ics: icsString })
  })

  if (!res.ok) {
    throw new Error(await res.text())
  }

  return res.json()
}

async function getIcsUrl (id) {
  return authFetch({
    url: `${apiHost}/ics`,
    method: 'GET'
  })
}

async function get (id) {
  return authFetch({
    url: `${apiHost}/requests/${id}`,
    method: 'GET'
  })
}

async function put (id, data) {
  return authFetch({
    url: `${apiHost}/requests/${id}`,
    method: 'PUT',
    body: data
  })
}

async function list () {
  return authFetch({
    url: `${apiHost}/requests`,
    method: 'GET'
  })
}

async function del (id) {
  return authFetch({
    url: `${apiHost}/requests/${id}`,
    method: 'DELETE'
  })
}

function load () {
  const { email, authToken, exp } = JSON.parse(
    window.localStorage.getItem('auth') || '{}'
  )
  return { email, authToken, exp }
}

function isSignedIn () {
  return !!auth.email && !!auth.exp && new Date().getTime() / 1000 < auth.exp
}

function signOut () {
  auth.set({ email: null, authToken: null, exp: null })
  window.localStorage.removeItem('auth')
}

async function authFetch ({ url, method, body }) {
  if (!isSignedIn()) {
    throw new Error('Not signed in')
  }

  const res = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.authToken}`
    },
    body: body ? JSON.stringify(body) : undefined
  })

  if (!res.ok) {
    if (res.status === 401 || res.status === 403) signOut()
    throw new Error(await res.text())
  }

  return res.json()
}

function expCheck () {
  console.log('expCheck', auth.exp)
  if (!auth.exp) return

  const currentTime = Math.floor(Date.now() / 1000)
  const isSafeExp = currentTime < auth.exp - 3600
  if (isSafeExp) return

  console.log('Session is close to expiring. Signing out.')
  signOut()
}
