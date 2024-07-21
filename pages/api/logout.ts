import { NextApiRequest, NextApiResponse } from "next"
import cookie from "cookie"

type Data = {
    status: string
}

export default function handler (
    req: NextApiRequest,
    res : NextApiResponse<Data>
){
    res.setHeader(
        "set-Cookie",
        cookie.serialize("shopy_token", "",{
            httpOnly : true,
            maxAge: 0 ,
            sameSite: "lax",
            path:"/"
        })
    )

    res.status(200).json({status: 'succees'})
}