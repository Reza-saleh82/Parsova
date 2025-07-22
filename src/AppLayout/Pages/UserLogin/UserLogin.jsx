import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { LoginUsersAction, UsersAction } from "../../../redux/Users/action";
import { useEffect } from "react";

function UserLogin() {

    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default UserLogin;