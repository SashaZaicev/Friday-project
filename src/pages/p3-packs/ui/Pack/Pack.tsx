import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../components/routes/Routes";
import {PackType} from "../../../../api/api";
import s from './pack.module.css'
import {deletePackTC, updatePackTC} from "../../bll/packsReducer";
import {useDispatch} from "react-redux";

type PackPropsType = {
    pack: PackType
    packDate: string // для нового типа даты
}

export const Pack = ({pack, packDate}: PackPropsType) => {
    const dispatch = useDispatch()
    const onBtnDeletePack = () => {
        dispatch(deletePackTC(pack._id))
    }
    const onBtnUpdatePack = () => {
        dispatch(updatePackTC(pack._id))
    }
    return <>
        <div className={s.tableBody}>
            <div className={s.tableBody_name}>{pack.name}</div>
            <div className={s.tableBody_cardsCount}>{pack.cardsCount}</div>
            <div className={s.tableBody_updated}>{packDate}</div>
            <div className={s.tableBody_user}>{pack.user_name}</div>
            <div className={s.tableBody_buttons}>
                <button onClick={onBtnDeletePack}>del</button>
                <button onClick={onBtnUpdatePack}>update</button>
                <NavLink to={PATH.CARDS}>cards</NavLink>
            </div>
        </div>
    </>
}