const mongoose = require('mongoose')
const deasync = require('deasync')
const { MongoMemoryServer } = require('mongodb-memory-server')

let db = null
let mongod = null

async function setupMockMongo() {
  mongod = await MongoMemoryServer.create()
  const uri = mongod.getUri()
  console.log('uri', uri)
  await mongoose.connect(uri)
  db = mongoose.connection
}

setupMockMongo()
  .catch((err) => {
    console.error('Mock MongoDB setup error:', err)
    process.exit(1)
  })

// Wait for connection
deasync.loopWhile(() => !db)

// Add health check method
mongoose.checkHealth = async function () {
  const time = Date.now()
  const { db } = mongoose.connection
  const collection = db.collection('healthcheck')

  const query = { _id: 'heartbeat' }
  const value = { $set: { time } }
  await collection.updateOne(query, value, { upsert: true })

  const found = await collection.findOne({ time: { $gte: time } })
  if (!found) throw new Error('DB Healthcheck Failed')
  return !!found
}

// Add cleanup method for tests
mongoose.cleanup = async function () {
  await mongoose.disconnect()
  await mongod.stop()
}

module.exports = mongoose 