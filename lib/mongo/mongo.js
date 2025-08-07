import mongoose from 'mongoose'
import config from '../../config/index.js'

// Initialize connection immediately
const init = (async () => {
  try {
    await mongoose.connect(config.mongoUri + config.mongoDbName)
    console.log('MongoDB connected successfully')
  } catch (err) {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  }
})()

// Ensure initialization is complete before module exports
await init

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

export default mongoose 