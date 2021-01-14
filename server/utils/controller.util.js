import {errorHandler} from "./errorHandler.util";
import {responseHandler} from "./responseHandler.util";
const treat = async (req, res, callback) => {
    try {
        const iserror = errorHandler.reponseErrorValidation(req, res)
        if (!iserror) {
            const response = await callback()
            if(response) {return responseHandler.responseOkServer(res,response)}
        }
    } catch (err) {
        return responseHandler.responseErrorServer(res, err)
    }
}

export const controllerUtil = {
    treat
}
