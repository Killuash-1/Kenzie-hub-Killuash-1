import Api from ".";

export interface iRegisterApi{

    id:             string;
    name:           string;
    email:          string;
    course_module:  string;
    bio:            string;
    contact:        string;
    
}

export async function RegisterApi(data: iRegisterApi){

     const res = await Api.post("/users", data);
    
}

