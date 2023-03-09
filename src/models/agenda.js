import mongoose from "mongoose";
const { Schema } = mongoose;

const agendaSchema = new Schema({
  user:{type:String,required:true}, // usuario
  email: {type:String,required:true}, //email
  name:{type:String,required:true}, //nombre
  lastname:{typr:String,required:true}, //apellidos
  rfc:{type:String,required:true}, //rfc
  city:{type:String,required:true}, //ciudad
  date:{type:Date,required:true} //fecha  
});
export const AgendaSchema = mongoose.model('agenda',agendaSchema)