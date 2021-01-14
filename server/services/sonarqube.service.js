import { urls, urlUtils } from "../constatnts/urls.constants"
import { RequestService } from "../utils/request.util"
import axios from 'axios';
import { config } from "../config/config";
import {responseHandler} from "../utils/responseHandler.util";

const addUser = async (email,login,name,password)=> {
    const user = await axios.post(
            urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.ADD_USER(email,login,name,password)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const deleteUser = async (login)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.DELETE_USER(login)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const addProject = async (name,project,visibility)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.ADD_PROJECT(name,project,visibility)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const deleteProject = async (project)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.DELETE_PROJECT(project)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const addPermissionToAgroup = async (groupId,permission,projectId)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.ADD_PERMISSION_GROUP(groupId,permission,projectId)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const addPermissionToUser = async (login,permission,projectId)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.ADD_PERMISSION_USER(login,permission,projectId)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const removePermissionFromGroup = async (groupId,permission,projectId)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.REMOVE_PERMISSION_GROUP(groupId,permission,projectId)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const removePermissionFromUser = async (login,permission,projectId)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.REMOVE_PERMISSION_USER(login,permission,projectId)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const addUserToGroup = async (name,login)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.ADD_USER_GROUP(name,login)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const createGroup = async (name,description)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.CREATE_GROUP(name,description)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const deleteGroup = async (name)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.DELETE_GROUP(name)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

const removeUserFromGroup = async (name,login)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE.SONARQUBE_ROOT_URL,
            urls.SONARQUBE.REMOVE_USER_GROUP(name,login)),
        {},
        {headers : {"Authorization" : config.sonarqubetoken}
        }
    ).catch(err=>err)
    if(user.status === undefined){
        return {error : true, data : user}
    }
    return {error : false, data : user}
}

export const sonarqubeService = {
    addUser,
    deleteUser,
    addProject,
    deleteProject,
    addPermissionToAgroup,
    addPermissionToUser,
    removePermissionFromGroup,
    removePermissionFromUser,
    addUserToGroup,
    createGroup,
    deleteGroup,
    removeUserFromGroup
}