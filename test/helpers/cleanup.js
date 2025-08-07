import mongoose from '../../lib/mongo/index.js'

async function cleanup() {
  if (process.env.NODE_ENV === 'test' && mongoose.cleanup && typeof mongoose.cleanup === 'function') {
    await mongoose.cleanup()
  }
}

// Ensure cleanup happens on process exit (but exit event can't handle async)
process.on('SIGINT', async () => {
  await cleanup()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  await cleanup()
  process.exit(0)
})

export default cleanup 