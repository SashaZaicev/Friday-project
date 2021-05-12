import React, {useEffect} from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import s from './table.module.css'
import {PATH} from "../../../components/routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {getPacksTC} from "../bll/packsReducer";
import {getAuthUserDataTC} from "../../p1-login/bll/loginReducer";
import {AppRootStateType} from "../../../app/store";

export const Packs = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    useEffect(() => {
        if (isAuth) return
        dispatch(getAuthUserDataTC())
    }, [])

    useEffect(() => {
        dispatch(getPacksTC('hello'))
    }, [])
    if (!isAuth) return <Redirect to={PATH.LOGIN}/>


    return (
        <>
            <h5>Packs page</h5>
            table
            <div className={s.table}>
                <div className={s.tableHeader}>
                    <div className={s.tableHeader_packsName}>Name</div>
                    <div className={s.tableHeader_cardsCount}>cardsCount</div>
                    <div className={s.tableHeader_updated}>updated</div>
                    <div className={s.tableHeader_buttonAdd}>
                        <button>add</button>
                    </div>
                </div>
                <div className={s.tableBody}>
                    <div className={s.tableBody_name}>"name"</div>
                    <div className={s.tableBody_cardsCount}>"cardsCount"</div>
                    <div className={s.tableBody_updated}>"updated"</div>
                    <div className={s.tableBody_buttons}>
                        <button>del</button>
                        <button>update</button>
                        <NavLink to={PATH.CARDS}>cards</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}