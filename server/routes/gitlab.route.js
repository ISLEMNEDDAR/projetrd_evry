import {Router} from "express"
import {gitlabController} from "../controllers/gitlab.controller";
const router = Router()

router.get("/users/",gitlabController.getAllUsers)
router.get("/user/:userId/projects",gitlabController.getAllProjectsUsers)
router.post("/hooks",gitlabController.handleHooks)
export default router   