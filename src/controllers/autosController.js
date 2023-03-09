import { AutoSchema } from "../models/auto.js";
import cloudinary from "../utils/cloudinaryConfig.js";
import multer from "multer";

//config multer
const storage = multer.diskStorage({});
const upload = multer({ storage });
//crear Autos
export const createAutos = async (req, res) => {
  upload.single("image")(req, res, async (error) => {
    if (error) {
      console.log(error);
      return res.status(400).json({ message: "Error al cargar la imagen" });
    }

    const { brand, model, contry, characteristics, price, date } = req.body;
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "autos",
        public_id: `${Date.now()}`,
      });
      const createAutos = AutoSchema({
        image: result.secure_url,
        brand,
        model,
        contry,
        characteristics,
        price,
        date:`${Date.now()}`
      });

      await createAutos.save();

      res.json(createAutos);

      console.log("Auto creado");
    } catch (error) {
      console.log(error);
    }
  });
};
//mostrar todos los Auto
export const findAllAutos = async (req, res) => {
  try {
    const getAutos = await AutoSchema.find();
    res.json(getAutos);
  } catch (error) {
    console.log(error);
  }
};
//mostrar un Auto
export const findOneAutos = async (req, res) => {
  try {
    const getOneAutos = await AutoSchema.findById(req.params.id);
    res.json(getOneAutos);
  } catch (error) {
    console.log(error);
  }
};
// actualizar Auto
export const updateAutos = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    await AutoSchema.findByIdAndUpdate(id, body, { useFindAndModify: false });
    res.send("Auto actualizada");
  } catch (error) {
    console.log(error);
  }
};
//eliminar un Auto
export const deleteAutos = async (req, res) => {
  try {
    await AutoSchema.deleteOne(req.body.id);
    res.send("Auto eliminado");
  } catch (error) {
    console.log(error);
  }
};
