import {Router} from "express"
import gitlabRoutes from "./gitlab.route"
import sonarqubeRoutes from "./sonarqube.route"
const router = Router()


router.use("/gitlab",gitlabRoutes)
router.use("/sonarqube",sonarqubeRoutes)
export default router