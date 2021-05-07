import React from 'react'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";

export const Profile = () => {
    const email = useSelector<AppRootStateType, string>(state => state.login.email)

    return (
        <>
            Profile user with email: {email}
        </>
    )
}