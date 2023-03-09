import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.URI ||'sin uri'

export const conexion = async () => {
    try {
        await mongoose.connect(uri)
        console.log('conexion exitosa');
    } catch (error) {
        console.log(error);
    }
}
