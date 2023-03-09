import mongoose from "mongoose";
const { Schema } = mongoose;

const logsSchema = new Schema({
  user:{type:String,required:true}, //usuario
  description:{type:String,required:true}, // descripcion
  date:{type:Date,required:false}, //fecha
});
export const LogsSchema = mongoose.model("log", logsSchema);
