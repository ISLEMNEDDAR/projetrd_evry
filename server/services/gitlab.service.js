import {config} from "../config/config";
import {type_system_hooks} from "../constatnts/type_hooks_gitlab.constant";

const user = {
    getAll : async () => {
        return await config.gitlab.Users.all()
    },
    getProjectsByUser : async (userId)=>{
        return await config.gitlab.Users.projects(userId)
    }
}

const handleSystemHook = (hook)=>{
    console.log(hook)
    const {event_name} = hook
    switch (event_name){
        case type_system_hooks.user.create :
            //add userhandleSystemHook to sonarqube
            break
        case type_system_hooks.project.create :
            //add project to sonarqube
            break
    }
}

export const gitlabService = {
    user,handleSystemHook
}