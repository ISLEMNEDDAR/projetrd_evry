import { controllerUtil } from "../utils/controller.util"
import {sonarqubeService} from "../services/sonarqube.service"
import statusResponse from "../constatnts/status.constants"
import { responseHandler } from "../utils/responseHandler.util"

/**
 * email login name password
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const addUser = async (req,res)=>{
    await controllerUtil.treat(req,res,async ()=>{
        const {email,login,name,password} = req.body
        const {error,data} = await sonarqubeService.addUser(email,login,name,password)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

const deleteUser = async(req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {login} = req.body
        const {error,data} = await sonarqubeService.deleteUser(login)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}
/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const addProject = async(req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {name,project,visibility} = req.body
        const {error,data} = await sonarqubeService.addProject(name,project,visibility)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

/**
 * projectkey
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteProject = async(req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {project} = req.body
        const {error,data} = await sonarqubeService.deleteProject(project)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

/**
 * groupId groupName permission projectId projectKey
 * @returns {Promise<void>}
 */
const addPermissionToAgroup = async(req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {groupId,permission,projectId} = req.body
        const {error,data} = await sonarqubeService.addPermissionToAgroup(groupId,permission,projectId)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

/**
 * login permission projectId projectKey
 * @returns {Promise<void>}
 */
const addPermissionToUser = async (req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {login,permission,projectId} = req.body
        const {error,data} = await sonarqubeService.addPermissionToUser(login,permission,projectId)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

/**
 * groupId permission
 * @returns {Promise<void>}
 */
const removePermissionFromGroup = async (req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {groupId,permission,projectId} = req.body
        const {error,data} = await sonarqubeService.removePermissionFromGroup(groupId,permission,projectId)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

/**
 *
 * @returns {Promise<void>}
 */
const removePermissionFromUser = async (req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {login,permission,projectId} = req.body
        const {error,data} = await sonarqubeService.removePermissionFromUser(login,permission,projectId)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

/**
 * groupId login name
 * @returns {Promise<void>}
 */
const addUserToGroup = async(req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {name,login} = req.body
        const {error,data} = await sonarqubeService.addUserToGroup(name,login)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

/**
 *descreption name
 */
const createGroup = async(req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {name,description} = req.body
        const {error,data} = await sonarqubeService.createGroup(name,description)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

/**
 * groupId name
 * @returns {Promise<void>}
 */
const deleteGroup = async (req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {id} = req.body
        const {error,data} = await sonarqubeService.deleteGroup(id)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

/**
 * groupId login name
 * @returns {Promise<void>}
 */
const removeUserFromGroup = async(req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        const {name,login} = req.body
        const {error,data} = await sonarqubeService.removeUserFromGroup(name,login)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}
    })
}

/**
 *
 * @returns {Promise<void>}
 */
const updateGroup = async(req,res)=>{
    await controllerUtil.treat(req,res,async()=>{
        /*const {email,login,name,password} = req.body
        const {error,data} = await sonarqubeService.updateGroup(email,login,name,password)
        if(error){
            return responseHandler.responseFromApiCall(res,data)
        }
        return { user : data.data}*/
    })
}


export const sonarqubeController = {
    addUser,
    addProject,
    deleteProject,
    addPermissionToAgroup,
    addPermissionToUser,
    removePermissionFromGroup,
    removePermissionFromUser,
    addUserToGroup,
    createGroup,
    deleteGroup,
    deleteUser,
    removeUserFromGroup,
    updateGroup
}