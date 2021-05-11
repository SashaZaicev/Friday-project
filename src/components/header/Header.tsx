import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../routes/Routes'

export const Header = () => {
    return (
        <div className="header">
            <div className="item">
                <NavLink to={PATH.CHECK_IN}>Check in</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.LOGIN}>Login</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.NEW_PASSWORD}>New password</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.PROFILE}>Profile</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.PASSWORD_RECOVERY}>Recover password</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.TEST_COMPONENT}>Test</NavLink>
            </div>
        </div>
    )
}