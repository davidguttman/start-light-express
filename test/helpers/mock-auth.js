import config from '../../config/index.js'

function mockAuth(req, res, next) {
  req.user = { email: config.whitelist[0] }
  next()
}

export default mockAuth 