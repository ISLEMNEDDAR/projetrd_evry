import {errorHandler} from "./errorHandler.util";
import {responseHandler} from "./responseHandler.util";
const treat = async (req, res, callback) => {
    try {
        const iserror = errorHandler.reponseErrorValidation(req, res)
        if (!iserror) { 
            if((await callback())) {return responseHandler.responseOkServer(res,response)}
        }
    } catch (err) {
        return responseHandler.responseErrorServer(res, err)
    }
}

export const controllerUtil = {
    treat
}
