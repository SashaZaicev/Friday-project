import React, {useEffect} from 'react'
import s from './table.module.css'
import { useHistory } from "react-router-dom";
import {PATH} from "../../../components/routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {getPacksTC} from "../bll/packsReducer";
import {getAuthUserDataTC} from "../../p1-login/bll/loginReducer";
import {AppRootStateType} from "../../../app/store";
import {Pack} from "./Pack/Pack";
import {PackType} from "../../../api/api";
import Preloader from "../../../components/preloader/Preloader";

export const Packs = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const status = useSelector<AppRootStateType, boolean>(state => state.recoverPassword.status)
    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packs.cardPacks)
    const errorText = useSelector<AppRootStateType, string>(state => state.login.errorText)
    const redirect = () => {
        history.push(PATH.LOGIN)
    }

    useEffect(() => {
        if (isAuth) return
        dispatch(getAuthUserDataTC())
        dispatch(getPacksTC())
    }, [])

    if (!isAuth) {
        setTimeout(redirect, 2000)
        return <div className={s.errorText}> {errorText} </div>
    } else

    return (
        <>
            { status ? <Preloader/> : "" } {/*// крутилка*/}
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