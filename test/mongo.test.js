import test from 'tape'
import mongoose from '../lib/mongo/index.js'

test('MongoDB health check', async (t) => {
  try {
    const result = await mongoose.checkHealth()
    t.ok(result.duration >= 0, 'health check returns duration')
    t.ok(result.duration < 1000, 'health check is reasonably fast')
    t.end()
  } catch (err) {
    t.error(err)
    t.end()
  }
})

// Cleanup when running individual test file
if (import.meta.url === `file://${process.argv[1]}`) {
  import('./helpers/cleanup.js').then(({ default: cleanup }) => {
    setTimeout(async () => {
      await cleanup()
      process.exit(0)
    }, 500)
  })
} 