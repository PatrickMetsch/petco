import { User } from "../../api/models/User";

export const loggedInStatus = 
	(user:User) =>
		user.logged_in ? "logged in" : "logged out"