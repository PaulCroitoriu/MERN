import mongoose from "mongoose"
import colors from "colors"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    console.log(
      `MongoDB connected ${conn.connection.host}`.brightGreen.underline
    )
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

export default connectDB
