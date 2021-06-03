import React, {useEffect, useState} from 'react'
import s from "../../p3-packs/ui/table.module.css";
import Preloader from "../../../components/preloader/Preloader";
import SearchTable from "../../p8-tableFilter/ui/SearchTable";
import Pagination from "../../p8-tableFilter/ui/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import {Card} from "../card/Card";
import {CardType} from "../../../api/api";
import {addCardTC, getCardTC} from "../bll/cardsReducer";
import ModalUpdateCardsContainer from "../../../components/Modals/ModalUpdateCards/ModalUpdateCardsContainer";
import {getAuthUserDataTC} from "../../p1-login/bll/loginReducer";
import {PATH} from "../../../components/routes/Routes";
import {Redirect} from "react-router-dom";


export const Cards = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const status = useSelector<AppRootStateType, boolean>(state => state.recoverPassword.status)
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const packId = useSelector<AppRootStateType, string>(state => state.packs.packId)
    let [redirect, setRedirect] = useState<boolean>(false)

    let [question, setQuestion] = useState<string>('')
    let [answer, setAnswer] = useState<string>('')

    const newCards = cards.map((c) => {
        return <Card key={c._id} card={c}/>
    })

    const onChangeQuestion = (question: string) => {
        setQuestion(question)
    }
    const onChangeAnswer = (answer: string) => {
        setAnswer(answer)
    }

    const onBtnAddCard = (question: string, answer?: string) => {
        dispatch(addCardTC(packId, question, answer))
    }

    useEffect(() => {
        if (isAuth) {
            dispatch(getCardTC(packId))
            setRedirect(false)
            return
        } else {
            setRedirect(true)
        }
        dispatch(getAuthUserDataTC())
    }, [isAuth, dispatch])

    if (redirect) return <Redirect to={PATH.LOGIN}/>

    return (
        <>
            <div className={s.preloader}>{status ? <Preloader/> : ""}</div>
            <SearchTable/>
            table
            <div className={s.table}>
                <div className={s.tableHeader}>
                    <div className={s.tableHeader_packsName}>question</div>
                    <div className={s.tableHeader_user}>answer</div>
                    <div className={s.tableHeader_cardsCount}>grade</div>
                    <div className={s.tableHeader_updated}>updated</div>
                    <div className={s.tableHeader_buttonAdd}>
                        <ModalUpdateCardsContainer modalName={'add'} onButtonModal={onBtnAddCard} question={question}
                                                   answer={answer} onChange={onChangeQuestion}
                                                   onChange2={onChangeAnswer}
                                                   title={'Enter new card'} buttonTrue={'Enter'}/>
                    </div>
                </div>
                {newCards}
            </div>
            <Pagination page={19} pageCount={12} productTotalCount={30}
                        getPage={() => {
                            'getpage'
                        }}/>

        </>
    )
}