export const urls = {
    SONARQUBE_ROOT_URL : "http://localhost:9000/api",
    SONARQUBE_API_USER : {
        add : (email,login,name,password) => `/users/create?email=${email}&login=${login}&name=${name}&password=${password}`
    }
}


const getUrl = (rootUrl,subUrl)=>{
    return `${rootUrl}${subUrl}`
}
export const urlUtils = {
    getUrl 
}