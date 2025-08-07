// Force test environment
process.env.NODE_ENV = 'test'
process.env.AUTHENTIC_SERVER = 'https://test.authentic.example.com'

import { spawn } from 'child_process'
import glob from 'glob'
import cleanup from './helpers/cleanup.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Get all test files
const testFiles = glob.sync('**/*.test.js', {
  cwd: __dirname,
  ignore: ['node_modules/**', 'helpers/**']
})

console.log(`Running ${testFiles.length} test files...`)

let passed = 0
let failed = 0

// Run each test file individually
for (const testFile of testFiles) {
  const testPath = `${__dirname}/${testFile}`
  console.log(`\nRunning: ${testFile}`)
  
  try {
    const result = await runSingleTest(testPath)
    if (result.success) {
      passed++
      console.log(`✓ ${testFile}`)
    } else {
      failed++
      console.log(`✗ ${testFile}`)
      console.log(result.output)
    }
  } catch (err) {
    failed++
    console.log(`✗ ${testFile} - ${err.message}`)
  }
}

console.log(`\nTest Results: ${passed} passed, ${failed} failed`)

// Final cleanup
await cleanup()

process.exit(failed > 0 ? 1 : 0)

function runSingleTest(testPath) {
  return new Promise((resolve) => {
    const child = spawn('node', [testPath], {
      env: {
        ...process.env,
        NODE_ENV: 'test',
        AUTHENTIC_SERVER: 'https://test.authentic.example.com'
      },
      stdio: 'pipe'
    })

    let output = ''
    let hasOutput = false
    
    child.stdout.on('data', (data) => {
      hasOutput = true
      output += data.toString()
    })

    child.stderr.on('data', (data) => {
      output += data.toString()
    })

    child.on('close', (code) => {
      const success = code === 0 && hasOutput && output.includes('# ok')
      resolve({ success, output, code })
    })

    // Timeout after 10 seconds
    setTimeout(() => {
      child.kill('SIGTERM')
      resolve({ success: false, output: output + '\n[TIMEOUT]', code: -1 })
    }, 10000)
  })
}