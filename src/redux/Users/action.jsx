export const UsersAction = (value=[]) =>{
    return{type: "users", payload: value}
}
export const LoginUsersAction = (value={}) =>{
    return{type: "loginUser", payload: value}
}