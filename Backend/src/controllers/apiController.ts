import { unlink } from "fs/promises";
import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { generateToken } from "../config/passport";
import sharp = require("sharp");

dotenv.config()

export const ping = (req: Request, res: Response) => {
    res.json({pong: true})
}

export const register = async (req: Request, res: Response) => {
    
    if( req.body.name && req.body.email && req.body.password){
        const hashPassword = await bcrypt.hash(req.body.password,10)
        req.body.password = hashPassword
        let {name, email, password} = req.body

       let hasUser = await User.findOne({where:{email}})

       if(!hasUser){
         
            let newUser = await User.create({name, email,password})
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
                res.json({status: true, token, id: user.id})
    
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

export const userInfo = async (req: Request, res: Response) => {
    
    if(req.params.id){
        
        let {id} = req.params

       let user = await User.findOne({where:{id}})
       if(user){
        try{
                res.json({user:{name: user.name, email: user.email, avatar: user.avatar}})  
                return;       
        }
        catch(err){
            res.json({error: 'Usuario não encontrado'})
            return
        }
           
       }
    } 
        res.json({error: 'Usuario não encontrado'})
        return
    
}
export const changeUserInfo = async (req: Request, res: Response) => {
    type UpdatesType = {
        name?:string;
        file?: string
    }
    if(req.params.id){
        let {id} = req.params
        let updates: UpdatesType = {}
            
        let user = await User.findByPk(id)
        if(user){
            res.status(200)
            if(req.body.name){
                user.name = req.body.name
            }

            if(req.file){
                const filename = `${req.file.filename}`
                await sharp(req.file.path)
                .resize(400, 400)
                .toFormat('jpg')
                .toFile(`./public/media/${filename}`)

                await unlink(req.file.path)

                user.avatar = `${filename}`
            }
    
            await user.save()

            res.json({user:{name: user.name,email:user.email,avatar: user.avatar}})
            return
        }  else {
            res.json({error: 'Usuario não encontrado'})
            return
        }
       
    } 
        res.json({error: 'Usuario não encontrado'})
        return
    
}

export const list = async (req: Request, res: Response) => {
    let users = await User.findAll()
    let list: object[] = []

    for(let i in users){
        list.push({name: users[i].name, email: users[i].email, avatar: users[i].avatar})
    }
    res.json({list})
}