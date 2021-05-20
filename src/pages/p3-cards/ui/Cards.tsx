import React from 'react'
import s from "../../p3-packs/ui/table.module.css";
import Preloader from "../../../components/preloader/Preloader";
import SearchTable from "../../p8-tableFilter/ui/SearchTable";
import Pagination from "../../p8-tableFilter/ui/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import {Card} from "../card/Card";
import {CardType} from "../../../api/api";
import {addCardTC} from "../bll/cardsReducer";


export const Cards = () => {
    const dispatch = useDispatch()
    const status = useSelector<AppRootStateType, boolean>(state => state.recoverPassword.status)
    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    const packId = useSelector<AppRootStateType, string>(state => state.packs.packId)


    const newCards = cards.map((c) => {
        return <Card key={c._id} card={c}/>
    })
    const onBtnAddCard = () => {
        dispatch(addCardTC(packId))
    }
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
                        <button onClick={onBtnAddCard}>add
                        </button>
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