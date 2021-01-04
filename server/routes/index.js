import {Router} from "express"
import gitlabRoutes from "./gitlab.route"
const router = Router()


router.use("/gitlab",gitlabRoutes)

export default router