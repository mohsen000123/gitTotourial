import { NextApiRequest, NextApiResponse } from "next"
import cookie from "cookie"
type Data = {
    status: string
}

interface ExtendedNextApiRequest extends NextApiRequest {
    body :{
        token : string
    }
}
export default function handler (
    req: ExtendedNextApiRequest,
    res : NextApiResponse<Data>
){
    res.setHeader(
        "set-Cookie",
        cookie.serialize("shopy_token", req.body?.token,{
            httpOnly : true,
            maxAge: 60*60*24 ,
            sameSite: "lax",
            path:"/"
        })
    )

    res.status(200).json({status: 'success'})
}