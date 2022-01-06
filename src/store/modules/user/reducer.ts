import { IUser } from "./type";

export function addNewUser(user: IUser) {
  return {
    type: "ADD_USER",
    payload: user,
  };
}
