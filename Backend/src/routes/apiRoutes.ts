import { Router } from "express";
import * as ApiController from '../controllers/ApiController'
import { privateRoute } from "../config/passport";

const apiRoutes = Router()


apiRoutes.get('/ping', ApiController.ping)

apiRoutes.post('/register',ApiController.register)
apiRoutes.post('/login',ApiController.login)

apiRoutes.get('/list',privateRoute, ApiController.list)

export default apiRoutes