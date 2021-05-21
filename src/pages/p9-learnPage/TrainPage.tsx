import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {CardType} from "../../api/api";
import {getCardTC} from "../p3-cards/bll/cardsReducer";
import {getRandomCard} from "../../components/functions/getRandomCard";
import {PATH} from "../../components/routes/Routes";
import {NavLink, useParams} from "react-router-dom";

export const TrainPage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const {packId} = useParams<Record<string, string>>();

    const [card, setCard] = useState<CardType>({
        _id: 'fake',
        question: 'Question?',
        answer: 'Answer',
        cardsPack_id: 'cardsPack_id',
        grade: 0,
        rating: 0,
        shots: 0,
        type: '',
        user_id: 'user_id',
        created: '',
        updated: '',
        comments: 'comments'
    });

    const dispatch = useDispatch();
    useEffect(() => {
        if (first) {
            dispatch(getCardTC(packId));
            setFirst(false);
        }
        console.log('cards', cards)
        if (cards.length > 0) setCard(getRandomCard(cards));

    }, [dispatch, packId, cards, first]);

    const onNext = () => {
        setIsChecked(false);

        if (cards.length > 0) {
            //dispatch
            setCard(getRandomCard(cards));

        } else {

        }
    }

    return (
        <div>
            <h6>TrainPage</h6>

            <div>{card.question}</div>
            <div>
                <button onClick={() => setIsChecked(true)}>show answer</button>
            </div>

            {isChecked && (
                <>
                    <div>{card.answer}</div>

                    {/*{grades.map((g, i) => (*/}
                    {/*    <ButtonNya key={'grade-' + i} onClick={() => {*/}
                    {/*    }}>{g}</ButtonNya>*/}
                    {/*))}*/}

                    <div>
                        <button><NavLink to={PATH.PACKS}>cancel</NavLink></button>
                        <button onClick={onNext}>next</button>
                    </div>
                </>
            )}
        </div>
    );
};
