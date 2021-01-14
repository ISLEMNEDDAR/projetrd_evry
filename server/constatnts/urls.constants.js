export const urls = {
    SONARQUBE : {
        SONARQUBE_ROOT_URL : "http://localhost:9000/api",
        ADD_USER : (email,login,name,password) => `/users/create?email=${email}&login=${login}&name=${name}&password=${password}`,
        DELETE_USER : (login)=> `/users/deactivate?login=${login}`,
        ADD_PROJECT : (name,project,visibility) => `/projects/create?name=${name}&project=${project}&visibility=${visibility}`,
        DELETE_PROJECT : (project) => `/projects/delete?project=${project}`,
        ADD_PERMISSION_GROUP : (groupName,permission,projectKey) => `/permissions/add_group?groupName=${groupName}}&permission=${permission}&projectKey=${projectKey}`,
        ADD_PERMISSION_USER : (login,permission,projectKey) => `/permission/add_user?login=${login}&permission=${permission}&projectKey=${projectKey}`,
        REMOVE_PERMISSION_GROUP : (groupName,permission,projectKey)=> `/permissions/remove_group?groupName=${groupName}&permission=${permission}&projectKey=${projectKey}`,
        REMOVE_PERMISSION_USER : (login,permission,projectKey) => `/permission/remove_user?login=${login}&permission=${permission}&projectKey=${projectKey}`,
        ADD_USER_GROUP : (name,login) => `/user_groups/add_user?name=${name}&login=${login}`,
        CREATE_GROUP : (name,description) => `/user_groups/create?name=${name}&description=${description}`,
        DELETE_GROUP : (name) => `/user_groups/delete?name=${name}`,
        REMOVE_USER_GROUP : (name,login) => `/user_groups/remove_user?name=${name}&login=${login}`,
    }
}

export const constant = {
    visibility : {
        private : "private",
        public : "public"
    }
}


const getUrl = (rootUrl,subUrl)=>{
    return `${rootUrl}${subUrl}`
}
export const urlUtils = {
    getUrl 
}