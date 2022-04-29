import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log(`Mongo connected : ${connection.connection.host}`,"green")
    } catch (error) {
        console.log(`Error : ${error.message}`,"red")
        process.exit(1)        
    }
}

export default connectDB