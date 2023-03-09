import mongoose from 'mongoose';
const { Schema } = mongoose;

const autoSchema = new Schema({
  image:{type:String,required:true}, //imagen 
  brand:{type:String,required:true}, // String is shorthand for {type: String} //marca
  model: {type:String,required:true}, //modelo
  contry:{type:String,required:true}, //pais de fabricacion
  characteristics:{type:String,required:true}, //caracteristicas
  price:{type:Number,required:true}, //precio
  date:{type:Date,required:false} //fecha
   
});
export const AutoSchema = mongoose.model('auto',autoSchema)