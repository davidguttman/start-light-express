// Force test environment
process.env.NODE_ENV = 'test'

import test from 'tape'
import glob from 'glob'
import cleanup from './helpers/cleanup.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const TIMEOUT = 10 * 1000

const timeout = setTimeout(() => {
  console.error(`Tests timed out after ${Math.round(TIMEOUT / 1000)}s`)
  process.exit(1)
}, TIMEOUT)

// Get files to test - either from args or find all test files

const specifiedFiles = process.argv.slice(2).length > 0
  ? process.argv.slice(2)
  : getAllTestFiles()

const filesToTest = specifiedFiles.map(relativeToImport)

// Load all test files - tape will run them in sequence
for (const file of filesToTest) {
  test(`File: ${file}`, t => t.end())
  await import(file)
}

// Run final cleanup after all tests complete
test('cleanup', async t => {
  console.log('Running final cleanup...')
  try {
    await cleanup()
    console.log('Final cleanup complete')
    clearTimeout(timeout)
    t.end()
  } catch (err) {
    console.error('Final cleanup error:', err)
    t.error(err)
    t.end()
  }
})

function getAllTestFiles() {
  return glob.sync('**/*.test.js', {
    cwd: __dirname,
    ignore: ['node_modules/**', 'helpers/**']
  })
}

function relativeToImport(relativePath) {
  return './' + relativePath.replace(/^test\//, '')
}
