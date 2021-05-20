import s from './card.module.css'
import React from "react";
import {CardType} from "../../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import {deleteCardTC, updateCardTC} from "../bll/cardsReducer";

type CardPropsType = {
    card: CardType
}

export const Card = ({card}: CardPropsType) => {
    const dispatch = useDispatch()
    const packId = useSelector<AppRootStateType, string>(state => state.packs.packId)

    const onBtnDeleteCard = () => {
        dispatch(deleteCardTC(packId, card._id))
    }
    const onBtnUpdateCard = () => {
        dispatch(updateCardTC(packId, card._id))
    }


    return <>
        <div className={s.mainWrapper}>
            <div className={s.question}>{card.question}</div>
            <div className={s.answer}>{card.answer}</div>
            <div className={s.grade}>{card.grade}</div>
            <div className={s.updated}>{card.updated}</div>
            <div className={s.buttons}>
                <button onClick={onBtnDeleteCard}>del
                </button>
                <button onClick={onBtnUpdateCard}>update
                </button>
            </div>
        </div>
    </>
}