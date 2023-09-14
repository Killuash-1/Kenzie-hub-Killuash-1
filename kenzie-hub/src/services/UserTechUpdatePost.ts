import Api from ".";
import { iUserTechPost } from "./UserTechPost";

export async function UserTechUpdatePost(id: string, data: Partial<iUserTechPost>) {
  await Api.put(`/users/techs/${id}`, data)
}