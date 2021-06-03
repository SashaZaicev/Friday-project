import s from './card.module.css'
import React, {useState} from "react";
import {CardType} from "../../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import {deleteCardTC, updateCardTC} from "../bll/cardsReducer";
import ModalQuestionContainer from "../../../components/Modals/ModalQuestion/ModalQuestionContainer";
import ModalUpdateCardsContainer from "../../../components/Modals/ModalUpdateCards/ModalUpdateCardsContainer";

type CardPropsType = {
    card: CardType
}

export const Card = ({card}: CardPropsType) => {
    const dispatch = useDispatch()
    const packId = useSelector<AppRootStateType, string>(state => state.packs.packId)
    const userId = useSelector<AppRootStateType, string>(state => state.login._id)

    let [question, setQuestion] = useState<string>(card.question)
    let [answer, setAnswer] = useState<string>(card.answer)
    const onChangeQuestion = (value: string) => {
        setQuestion(value)
    }
    const onChangeAnswer = (value: string) => {
        setAnswer(value)
    }

    const onBtnDeleteCard = () => {
        dispatch(deleteCardTC(packId, card._id))
    }
    const onBtnUpdateCard = (question?: string, answer?: string) => {
        dispatch(updateCardTC(packId, card._id, question, answer))
    }

    // const disabled = userId !== card.user_id


    return <>
        <div className={s.mainWrapper}>
            <div className={s.question}>{card.question}</div>
            <div className={s.answer}>{card.answer}</div>
            <div className={s.grade}>{card.grade}</div>
            <div className={s.updated}>{card.updated}</div>
            <div className={s.buttons}>
                <ModalQuestionContainer modalName={"del"} onButtonModal={onBtnDeleteCard} disabled={false}/>
                <ModalUpdateCardsContainer modalName={"update"} onButtonModal={onBtnUpdateCard}
                                           question={question} answer={answer} onChange={onChangeQuestion}
                                           onChange2={onChangeAnswer} buttonTrue={"Update"} title={'Set new question'}
                                           disabled={false}/>
            </div>
        </div>
    </>
}