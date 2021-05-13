import React, {useEffect} from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import s from './table.module.css'
import {PATH} from "../../../components/routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {getPacksTC} from "../bll/packsReducer";
import {getAuthUserDataTC} from "../../p1-login/bll/loginReducer";
import {AppRootStateType} from "../../../app/store";
import {Pack} from "./Pack/Pack";
import {PackType} from "../../../api/api";

export const Packs = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packs.cardPacks)

    useEffect(() => {
        if (isAuth) return
        dispatch(getAuthUserDataTC())
    }, [])

    useEffect(() => {
        if (isAuth) {
            dispatch(getPacksTC())
        }
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
                {packs.map((p) => {
                    return <Pack key={p._id} pack={p}/>
                })}
            </div>
        </>
    )
}