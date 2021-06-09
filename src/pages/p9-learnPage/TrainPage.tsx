import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {CardType} from "../../api/api";
import {getCardTC, updateGradeCardTC} from "../p3-cards/bll/cardsReducer";
import {getRandomCard} from "../../components/functions/getRandomCard";
import {PATH} from "../../components/routes/Routes";
import {NavLink, useParams} from "react-router-dom";
import s from './trainPage.module.css'
import c from '../../components/commonStyle/common.module.css'


export const TrainPage = () => {
    const grades = ["didn't know", 'forgot', 'thought too long', 'nearly guessed', 'i knew it'];
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isFirstCard, setFirstCard] = useState<boolean>(true);
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const {packId} = useParams<Record<string, string>>();
    const dispatch = useDispatch();


    const [card, setCard] = useState<CardType>({
        _id: 'fake',
        question: 'Question?',
        answer: 'Answer',
        cardsPack_id: 'cardsPack_id',
        grade: 0,
        more_id: '',
        rating: 0,
        shots: 0,
        type: '',
        user_id: 'user_id',
        created: '',
        updated: '',
        comments: 'comments'
    });

    useEffect(() => {
        if (isFirstCard) {
            dispatch(getCardTC(packId));
            setFirstCard(false);
        }
        if (cards.length > 0) setCard(getRandomCard(cards));

    }, [dispatch]);

    const onGradeBtnClick = (grade: number) => {
        dispatch(updateGradeCardTC(card._id, grade, packId))
        setCard(getRandomCard(cards));
        setIsChecked(false)
    }
    const onNext = () => {
        setCard(getRandomCard(cards));
        setIsChecked(false);
    }

    return (
        <div className={c.mainContainer}>
            <div className={c.form}>
                <div>{card.question}</div>
                <div>
                    <button
                        onClick={() => setIsChecked(!isChecked)}>{isChecked ? 'hide answer' : 'show answer'}</button>
                </div>
                {isChecked && (<div>{card.answer}</div>)}

                <div className={s.buttons}>{grades.map((g, i) => (
                    <button key={'grade-' + i} className={s.button} onClick={() => {
                        onGradeBtnClick(i + 1)
                    }}>{g}</button>

                ))}
                </div>

                <div className={s.buttons}>
                    <div className={s.button}>
                        <button><NavLink to={PATH.PACKS} className={s.button1}>cancel</NavLink></button>
                    </div>
                    <div className={s.button}>
                        <button onClick={onNext}>next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
