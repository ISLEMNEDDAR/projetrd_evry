import {Router} from "express"
import {sonarqubeController} from "../controllers/sonarqube.controller"
const router = Router()

router.post("/user",sonarqubeController.addUser) //
router.delete("/user",sonarqubeController.deleteUser) //
router.post("/project",sonarqubeController.addProject) //
router.delete("/project",sonarqubeController.deleteProject) //
router.post("/permission/group",sonarqubeController.addPermissionToAgroup)
router.post("/permission/user",sonarqubeController.addPermissionToUser)
router.delete("/permission/group",sonarqubeController.removePermissionFromGroup)
router.delete("/permission/user",sonarqubeController.removePermissionFromUser)
router.post("/group/user",sonarqubeController.addUserToGroup)//
router.put("/group/user",sonarqubeController.removeUserFromGroup)//
router.post("/group",sonarqubeController.createGroup) //
router.delete("/group",sonarqubeController.deleteGroup) //




export default router