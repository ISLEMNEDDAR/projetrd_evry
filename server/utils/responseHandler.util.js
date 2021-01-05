import statusResponse from "../constatnts/status.constants";

const response = (res,status,data)=>{
    console.log("response")
    return res.status(status).json({
        data : data
    })
}

const responseOkServer = (res,message)=>{
    response(res,statusResponse.STATUS_OK,message)
}

const responseErrorServer = (res,err)=>{
    console.log(err)
    response(res, statusResponse.STATUS_SERVER_ERROR, {message: "internal Error"});
}

const responseUnautharized = (res,message) => {
    response(res,statusResponse.STATUS_ANAUTHORIZED,message)
}

const responseUnproccesabaleEntity = (res,message)=>{
    response(res,statusResponse.STATUS_UNPROCESSABLE_ENTITY,message)
}

const responseForrbien = (res,message) =>{
    response(res,statusResponse.FOORBIDDEN,message)
}

const responseBadResquest = (res,message) =>{
    response(res,statusResponse.BAD_REQUEST,message)
}
const responseNotFound = (res,message) =>{
    response(res,statusResponse.NOT_FOUND,message)
}

const responseFromApiCall = (res,user)=>{
        const status = user.response.status
        const data = user.response.data
        response(res,status,data)
}

export const responseHandler = {
    responseOkServer,
    responseForrbien,
    responseUnautharized,
    responseNotFound,
    responseBadResquest,
    responseUnproccesabaleEntity,
    responseErrorServer,
    responseFromApiCall
}
