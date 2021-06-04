import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../routes/Routes'
import s from './header.module.css'

export const Header = () => {
    let [showMenu, setShowMenu] = useState(true)

    return (
        <div className={s.headerWrapper}>
            <div className={s.componentRoutesWrapper}>
                <div className={s.text} onClick={() => {
                    setShowMenu(!showMenu)
                }}>Learn cards project
                </div>
            </div>
            {showMenu && (<ul className={s.main_Menu}>
                <li className={s.active}>
                    <NavLink to={PATH.REGISTRATION} activeClassName={s.active}>registration</NavLink>
                </li>
                <li className={s.active}>
                    <NavLink to={PATH.LOGIN} activeClassName={s.active}>login</NavLink>
                </li>
                <li className={s.active}>
                    <NavLink to={PATH.PROFILE} activeClassName={s.active}>profile</NavLink>
                </li>
                <li className={s.active}>
                    <NavLink to={PATH.PACKS} activeClassName={s.active}>packs</NavLink>
                </li>
            </ul>)}


        </div>
    )
}