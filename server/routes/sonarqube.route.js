import {Router} from "express"
import {sonarqubeController} from "../controllers/sonarqube.controller"
const router = Router()

router.post("/user/add",sonarqubeController.addUser)
export default router