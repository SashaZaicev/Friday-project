import s from './card.module.css'
import React from "react";
import {CardType} from "../../../api/api";

type CardPropsType = {
    card: CardType
}

export const Card = ({card}: CardPropsType) => {


    return <>
        <div className={s.mainWrapper}>
            <div className={s.question}>{card.question}</div>
            <div className={s.answer}>{card.answer}</div>
            <div className={s.grade}>{card.grade}</div>
            <div className={s.updated}>{card.updated}</div>
            <div className={s.buttons}>
                <button onClick={() => {
                }}>del
                </button>
                <button onClick={() => {
                }}>update
                </button>
            </div>
        </div>
    </>
}