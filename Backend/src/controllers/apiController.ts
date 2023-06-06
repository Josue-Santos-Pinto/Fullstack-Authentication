import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { generateToken } from "../config/passport";

dotenv.config()

export const ping = (req: Request, res: Response) => {
    res.json({pong: true})
}

export const register = async (req: Request, res: Response) => {
    
    if(req.body.email && req.body.password){
        const hashPassword = await bcrypt.hash(req.body.password,10)
        req.body.password = hashPassword
        let {email, password} = req.body

       let hasUser = await User.findOne({where:{email}})

       if(!hasUser){
         
            let newUser = await User.create({email,password})
            let token = generateToken({id: newUser.id})
            res.json({id: newUser.id, token})

            return;
           
       } else {
        res.json({error: 'Usuario já cadastrado'})
        return
       }
    } 
        res.json({error: 'E-mail e/ou senha não enviados'})
        return
    
}

export const login = async (req: Request, res: Response) => {
    
    if(req.body.email && req.body.password){
        
        let {email, password} = req.body

       let user = await User.findOne({where:{email}})
       if(user){
        try{
            if(await bcrypt.compare(req.body.password, user.password)){
                const token = generateToken({id: user.id,})
                res.json({status: true, token})
    
                return;
            } 
        }
        catch(err){
            res.json({error: 'Email e/ou senha incorretos'})
            return
        }
           
       }
    } 
        res.json({error: 'E-mail e/ou senha não enviados'})
        return
    
}

export const list = async (req: Request, res: Response) => {
    let users = await User.findAll()
    let list: string[] = []

    for(let i in users){
        list.push(users[i].email)
    }
    res.json({list})
}