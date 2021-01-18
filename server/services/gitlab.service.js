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
            await handleGroupCreated(hook) // done
            break
        case type_system_hooks.group.destroy :
            await handleGroupRemoved(hook) // done
            break
        case type_system_hooks.group.rename :
            await handleGroupRenamed(hook) // to recheck
            break
        case type_system_hooks.project.create :
            //add project to sonarqube
            await handleProjectCreated(hook) // done
            break
        case type_system_hooks.project.destroy :
            //add project to sonarqube
            await handleProjectDestroyed(hook) //
            break
        case type_system_hooks.project.rename :
            //add project to sonarqube
            await handleProjectRenamed(hook) // to recheck
            break
        case type_system_hooks.project.transfer :
            //add project to sonarqube
            await handleProjectTrandfered(hook) // to recheck
            break
        case type_system_hooks.project.update :
            //add project to sonarqube
            await handleProjectUpdated(hook) //to recheck
            break
        case type_system_hooks.user.create :
            //add userhandleSystemHook to sonarqube
            await handleUserCreated(hook) // done
            break
        case type_system_hooks.user.destroy :
            await handleUserDestroyed(hook) // done
            break
        case type_system_hooks.user.rename :
            await handleUserRenamed(hook) // to recheck
            break
        case type_system_hooks.user.add_to_group :
            await handleUserAddedToGroup(hook) // done
            break
        case type_system_hooks.user.remove_from_group :
            await handleUserRemovedFromGroup(hook) // done
            break

    }
}

// User => username = login
// Group => name = name
// Project => project/projectKey = path
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
    console.log("project created")
    const {name,path,project_visibility} = hook
    await sonarqubeService.addProject(name,path,project_visibility)
}

const handleProjectDestroyed = async (hook) => {
    console.log("project destroyed")
    const {path} = hook
    await sonarqubeService.deleteProject(path)
}

const handleProjectRenamed = async (hook) => {
    console.log("project renamed")
}

const handleProjectTrandfered = async (hook) => {
    console.log("project transferd")
}

const handleProjectUpdated = async (hook) => {
    console.log("group updated")
}

const handleUserCreated = async (hook) => {
    console.log("user created")
    const {email,username,name} = hook
    await sonarqubeService.addUser(email,username,name,username)
}

const handleUserDestroyed = async (hook) => {
    console.log("user_destroy")
    const {username} = hook
    await sonarqubeService.deleteUser(username)
}

const handleUserRenamed = async (hook) => {
    console.log("user renamed")

}

const handleUserAddedToGroup = async (hook) => {
    console.log("ad user to group")
    const {group_name,user_username} = hook
    await sonarqubeService.addUserToGroup(group_name,user_username)
}

const handleUserRemovedFromGroup = async (hook) => {
    console.log("remove user from group")
    const {group_name,user_username} = hook
    await sonarqubeService.removeUserFromGroup(group_name,user_username)
}

export const gitlabService = {
    user,handleSystemHook
}