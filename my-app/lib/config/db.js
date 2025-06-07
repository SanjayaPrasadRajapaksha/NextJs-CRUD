import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://sanjaya:e2245041@cluster0.szp3cwr.mongodb.net/Todo App')
console.log('DB Connected')
}