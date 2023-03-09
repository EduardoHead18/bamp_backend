import { Router } from "express"
import * as userController from "../controllers/userController.js"
import * as autoController from "../controllers/autosController.js"
import { createLog } from "../controllers/logsController.js"
import * as authController from "../auth/loginAuth.js"

//route example 
//http://localhost:4000/api/user

export const router = Router()
//login auth
router.post('/login', authController.login)
router.get('/verif',authController.accessToken, (req,res)=>{
    res.send('informacion entregada')
})

//rutas - endpoint 'USER'
router.post('/user', userController.createUser)
router.get('/user', userController.findAllUser)
router.get('/user/:id', userController.findOneUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

//rutas - endpoint 'Autos'
router.post('/autos', autoController.createAutos)
router.get('/autos', autoController.findAllAutos)
router.get('/autos/:id', autoController.findOneAutos)
router.put('/autos/:id', autoController.updateAutos)
router.delete('/autos/:id', autoController.deleteAutos)

//rutas - endpoint 'Logs'
router.post('/logs',createLog)
