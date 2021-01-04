import {config} from "../config/config";

const user = {
    getAll : async () => {
        return await config.gitlab.Users.all()
    },
    getProjectsByUser : async (userId)=>{
        return await config.gitlab.Users.projects(userId)
    }
}


export const gitlabService = {
    user
}