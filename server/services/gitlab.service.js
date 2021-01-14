import {config} from "../config/config";
import {type_system_hooks} from "../constatnts/type_hooks_gitlab.constant";
import {sonarqubeService} from "./sonarqube.service";

const user = {
    getAll : async () => {
        return await config.gitlab.Users.all()
    },
    getProjectsByUser : async (userId)=>{
        return await config.gitlab.Users.projects(userId)
    }
}

const handleSystemHook = async (hook)=>{
    console.log(hook)
    const {event_name} = hook
    switch (event_name){
        case type_system_hooks.group.create : //
            await handleGroupCreated(hook)
            break
        case type_system_hooks.group.destroy :

            break
        case type_system_hooks.group.rename :
            break
        case type_system_hooks.project.create :
            //add project to sonarqube
            break
        case type_system_hooks.project.destroy :
            //add project to sonarqube
            break
        case type_system_hooks.project.rename :
            //add project to sonarqube
            break
        case type_system_hooks.project.transfer :
            //add project to sonarqube
            break
        case type_system_hooks.project.update :
            //add project to sonarqube
            break
        case type_system_hooks.user.create :
            //add userhandleSystemHook to sonarqube
            break
        case type_system_hooks.user.destroy :
            break
        case type_system_hooks.user.rename :
            break
        case type_system_hooks.user.add_to_group :
            break
        case type_system_hooks.user.remove_from_group :
            break

    }
}

const handleGroupCreated = async (hook) => {
    console.log("group created")
    const {name} = hook
    await sonarqubeService.createGroup(name)
    //await sonarqubeService.addUserToGroup(name, owner_name)
}

const handleGroupRemoved = async (hook) => {
    console.log("group destroyed")
    const {name} = hook
    await sonarqubeService.deleteGroup(name)
}

const handleGroupRenamed = async (hook) => {
    console.log("group renamed")
}

const handleProjectCreated = async (hook) => {
    console.log("group created")
}

const handleProjectDestroyed = async (hook) => {
    console.log("group created")
}

const handleProjectRenamed = async (hook) => {
    console.log("group created")
}

const handleProjectTrandfered = async (hook) => {
    console.log("group created")
}

const handleProjectUpdated = async (hook) => {
    console.log("group created")
}

const handleUserCreated = async (hook) => {
    console.log("group created")
}

const handleUserDestroyed = async (hook) => {
    console.log("group created")
}

const handleUserRenamed = async (hook) => {
    console.log("group created")
}

const handleUserAddedToGroup = async (hook) => {
    console.log("group created")
}

const handle = async (hook) => {
    console.log("group created")
}

export const gitlabService = {
    user,handleSystemHook
}