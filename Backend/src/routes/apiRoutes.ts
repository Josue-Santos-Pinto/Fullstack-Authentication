import { Router } from "express";
import * as ApiController from '../controllers/ApiController'

const apiRoutes = Router()


apiRoutes.get('/ping', ApiController.ping)

apiRoutes.post('/register',ApiController.register)
apiRoutes.post('/login',ApiController.login)

apiRoutes.get('/list',ApiController.list)

export default apiRoutes