import { LogsSchema } from "../models/logs.js";
//crear Usuarios
export const createLog = async (req, res) => {
  try {
    const { user, description} = req.body;
    const createLog = LogsSchema({ user, description, date: `${Date.now()}` });
    await createLog.save();
    res.json(createLog);
    console.log("Log created");
  } catch (error) {
    console.log(error);
  }
};
