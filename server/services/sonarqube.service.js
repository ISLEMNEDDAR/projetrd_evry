import { urls, urlUtils } from "../constatnts/urls.constants"
import { RequestService } from "../utils/request.util"
import axios from 'axios';
import { config } from "../config/config";

const addUser = async (email,login,name,password)=> {
    const user = await axios.post(
        urlUtils.getUrl(urls.SONARQUBE_ROOT_URL,urls.SONARQUBE_API_USER.add(email,login,name,password)),
        {},
        {
            headers : {
                "Authorization" : config.sonarqubetoken
            }
        }

    ).catch(err=>err)
    return user
}
export const sonarqubeService = {
    addUser
}