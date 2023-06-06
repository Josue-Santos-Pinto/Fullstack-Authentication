import passport from "passport";
import dotenv from 'dotenv'
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt'
import { User, UserType } from "../models/User";
import { NextFunction, Request, Response } from "express";
import JWT from 'jsonwebtoken'

dotenv.config()

const notAuthorizedJson = {
    status: 401,
    message: 'Não autorizado'
}
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY as string
}


passport.use(new JWTStrategy(options, async (payload, done) => {
        const user = await User.findByPk(payload.id)

        if(user){
            return done(null, user)
        } else {
            return done(notAuthorizedJson, false)
        }
    
}))

export const generateToken = (data: object) => {
    return JWT.sign(data, process.env.JWT_SECRET_KEY as string)
}

export const privateRoute = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', (err: string, user: UserType) => {
        req.user = user
        return user ? next() : next(notAuthorizedJson)
    })(req,res,next)
}


export default passport