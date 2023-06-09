import { Router } from "express";
import * as ApiController from '../controllers/ApiController'
import { privateRoute } from "../config/passport";
import multer from "multer";

const apiRoutes = Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./tmp')
    },
    filename: (req,file,cb) => {
        let randomName = Math.floor(Math.random() * 999999999)
        cb(null, randomName + Date.now() +'.jpg')
    }
})
const upload = multer({
    storage,
    fileFilter: (req,file,cb) => {
        const allowed: string[] = ['image/jpg','image/jpeg','image/png']    
            cb(null, allowed.includes(file.mimetype))   
    },
    limits: {fieldSize: 2000000}
})

apiRoutes.get('/ping', ApiController.ping)

apiRoutes.post('/register',ApiController.register)
apiRoutes.post('/login',ApiController.login)

apiRoutes.get('/user/:id',privateRoute, ApiController.userInfo)
apiRoutes.put('/user/:id',privateRoute,upload.single('avatar'), ApiController.changeUserInfo)
apiRoutes.get('/list',privateRoute, ApiController.list)

export default apiRoutes