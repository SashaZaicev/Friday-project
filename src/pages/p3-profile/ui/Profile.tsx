import React from 'react'
import {actionsCheckIn} from "../../p2-checkIn/bll/checkInReducer";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../../app/store";

export const Profile = () => {
    const dispatch = useDispatch();
    const goOut = () => {
        dispatch(actionsCheckIn.setSuccess(false))
        dispatch(actionsCheckIn.setLoading(false))
    }
    const stateRegistrationIsSuccess = useSelector<AppRootStateType>(state => state.registration.isSuccess)

    if (!stateRegistrationIsSuccess) return <Redirect to={"/check-in"}/>

    return (
        <>
            Profile
            <button onClick={goOut}>OUT</button>
        </>
    )
}