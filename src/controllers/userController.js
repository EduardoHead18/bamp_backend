import { UserSchema } from "../models/user.js";
//crear Usuarios
export const createUser = async (req, res) => {
  try {
    const createUser = UserSchema(req.body);
    await createUser.save();
    res.json(createUser);
    console.log("usuario creado");
  } catch (error) {
    console.log(error);
  }
};
//mostrar todos los Usuarios
export const findAllUser = async (req, res) => {
  try {
    const getUser = await UserSchema.find();
    res.json(getUser);
  } catch (error) {
    console.log(error);
  }
};
//mostrar un Usuario
export const findOneUser = async (req, res) => {
  try {
    const getOneUser = await UserSchema.findById(req.params.id);
    res.json(getOneUser);
  } catch (error) {
    console.log(error);
  }
};
// actualizar Usuario
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    await UserSchema.findByIdAndUpdate(id, body, { useFindAndModify: false });
    res.send("usuario actualizado");
  } catch (error) {
    console.log(error);
  }
};
//eliminar un Usuario
export const deleteUser = async (req, res) => {
  try {
    await UserSchema.deleteOne(req.body.id);
    res.send("usuario eliminado");
  } catch (error) {
    console.log(error);
  }
};

