import {controllerUtil} from "../utils/controller.util";
import {gitlabService} from "../services/gitlab.service";

const getAllUsers = async (req,res) => {
    await controllerUtil.treat(req, res, async () => {
        const users = await gitlabService.user.getAll()
        return {
            message: users
        }
    })
}


const getAllProjectsUsers = async (req,res)=>{
    await controllerUtil.treat(req,res,async ()=>{
        const {userId} = req.params
        console.log(userId)
        const projects = await gitlabService.user.getProjectsByUser(userId)
        return{
            projects : projects
        }
    })
}

const handleHooks = async (req, res) => {
    await controllerUtil.treat(req, res, async () => {
        await gitlabService.handleSystemHook(req.body)
        return {
            message : "hook used"
        }
    })
}

export const gitlabController = {
    getAllUsers,
    getAllProjectsUsers,
    handleHooks
}