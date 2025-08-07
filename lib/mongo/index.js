async function getMongoose() {
  if (process.env.NODE_ENV === 'test') {
    const { default: mockMongoose } = await import('./mock-mongo.js')
    return mockMongoose
  } else {
    const { default: mongoose } = await import('./mongo.js')
    return mongoose
  }
}

const mongoose = await getMongoose()

export default mongoose 