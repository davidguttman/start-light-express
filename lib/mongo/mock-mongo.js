import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

let mongod = null
let isConnected = false

// Initialize connection immediately  
const init = (async () => {
  mongod = await MongoMemoryServer.create()
  const uri = mongod.getUri()
  console.log('Mock MongoDB URI:', uri)
  await mongoose.connect(uri)
  isConnected = true
})()

// Ensure initialization is complete before module exports
await init

// Add health check method
mongoose.checkHealth = async function () {
  const start = Date.now()
  const { db } = mongoose.connection
  const collection = db.collection('healthcheck')

  try {
    const query = { _id: 'heartbeat' }
    const value = { $set: { time: start } }
    await collection.updateOne(query, value, { upsert: true })

    const found = await collection.findOne({ time: { $gte: start } })
    if (!found) {
      const error = new Error('Database connection failed')
      error.status = 500
      throw error
    }
    
    const duration = Date.now() - start
    return { duration }
  } catch (err) {
    const error = new Error('Database connection failed')
    error.status = 500
    throw error
  }
}

// Add cleanup method for tests
mongoose.cleanup = async function () {
  await mongoose.disconnect()
  await mongod.stop()
}


export default mongoose 