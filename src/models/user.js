import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  user:{type:String,required:true}, // usuario
  password: {type:String,required:true}, //contraseña
  name:{type:String,required:true}, //nombre
  lastName:{type:String,required:true}, //apellido
  city:{type:String,required:true}, //ciudad
  rfc:{type:String,required:true}, //RFC
  email:{type:String,required:true}, //email
});
export const UserSchema = mongoose.model('user',userSchema)