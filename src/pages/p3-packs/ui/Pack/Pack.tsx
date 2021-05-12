import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../components/routes/Routes";
import {PackType} from "../../../../api/api";
import s from './pack.module.css'

type PackPropsType = {
    pack: PackType
}

export const Pack = ({pack}: PackPropsType) => {
    return <>
        <div className={s.tableBody}>
            <div className={s.tableBody_name}>{pack.name}</div>
            <div className={s.tableBody_cardsCount}>{pack.cardsCount}</div>
            <div className={s.tableBody_updated}>{pack.updated}</div>
            <div className={s.tableBody_buttons}>
                <button>del</button>
                <button>update</button>
                <NavLink to={PATH.CARDS}>cards</NavLink>
            </div>
        </div>
    </>
}