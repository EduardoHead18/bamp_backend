import jwt from 'jsonwebtoken'
import { keys } from '../settings/keys.js'

export const login =  (req,res)=>{
    const {user,pass} = req.body
    if(user == 'eduardo' && pass == 'eduardo12'){
        const payload = {
            check:true
        }
        const token = jwt.sign(payload, keys.key,{
            expiresIn: '1h'
        })
        res.json({
            message:'successful authentication',
            token:token
        })
    }else res.send('Incorrect user or password')

}
export const accessToken = ((req,res,next)=>{
    let token = req.headers['x-access-token'] || req.headers['authorization']
    console.log(token)
})