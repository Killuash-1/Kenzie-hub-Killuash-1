import Api from ".";
import { iUserTechPost } from "./UserTechPost";

export interface iLoginApi{

    user:               iUser
    token:              string
}

export interface iUser{

        bio :           string     
        contact:        string
        course_module:  string
        created_at:     string
        email:          string
        id:             string
        name:           string
        techs:          iUserTechPost[]
}

export interface iLoginApiObject{
    email:  string
  password: string
}

export async function LoginApi (element: iLoginApiObject): Promise<iLoginApi> {

    const {data} = await Api.post<iLoginApi>("/sessions", element);
    
    
    
    return data
}


export async function UserGet(): Promise<iUser> {
    const { data } = await Api.get<iUser>("/profile");

    return data
}


