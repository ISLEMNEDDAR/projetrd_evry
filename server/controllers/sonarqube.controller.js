import { controllerUtil } from "../utils/controller.util"
import {sonarqubeService} from "../services/sonarqube.service"
import statusResponse from "../constatnts/status.constants"
import { responseHandler } from "../utils/responseHandler.util"

const addUser = async (req,res)=>{
    await controllerUtil.treat(req,res,async ()=>{
        const {email,login,name,password} = req.body
        const user = await sonarqubeService.addUser(email,login,name,password)
        console.log(user.status)
        if(user.status === undefined){
            return responseHandler.responseFromApiCall(res,user) 
        }
        return { user : user.data}
    })
}


export const sonarqubeController = {
    addUser
}