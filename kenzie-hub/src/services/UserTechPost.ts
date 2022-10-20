import Api from ".";

export interface iUserTechPost{
    id:     string
    title:  string
    status: string
}

export async function UserTechPost(data: iUserTechPost ) {
    const res = await Api.post("/users/techs", data);
}

