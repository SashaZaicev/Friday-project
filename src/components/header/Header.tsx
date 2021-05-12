import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../routes/Routes'
import s from './header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.item}>
                <NavLink to={PATH.REGISTRATION}>registration</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.LOGIN}>login</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.NEW_PASSWORD}>new password</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.PROFILE}>profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.PASSWORD_RECOVERY}>recover password</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.PACKS}>packs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.CARDS}>cards</NavLink>
            </div>
            {/*<div className="item">*/}
            {/*    <NavLink to={PATH.TEST_COMPONENT}>Test</NavLink>*/}
            {/*</div>*/}
        </div>
    )
}