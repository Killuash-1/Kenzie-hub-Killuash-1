import Api from ".";

export interface iUserTechPost{
    id:     string
    title:  string
    status: string
}

export async function UserTechPost(data: iUserTechPost ) {
    await Api.post("/users/techs", data);
}

