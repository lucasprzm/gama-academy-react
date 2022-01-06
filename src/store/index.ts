import { createStore } from "redux";
import AllUsers from "./modules/user/action";

const store = createStore(AllUsers);

export default store;
