import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import s from './table.module.css'
import {PATH} from "../../../components/routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, getPacksTC} from "../bll/packsReducer";
import {getAuthUserDataTC} from "../../p1-login/bll/loginReducer";
import {AppRootStateType} from "../../../app/store";
import {Pack} from "./Pack/Pack";
import {PackType} from "../../../api/api";
import SearchTable from "../../p8-tableFilter/ui/SearchTable";
import Pagination from "../../p8-tableFilter/ui/Pagination/Pagination";
import {actionsSearch} from "../../p8-tableFilter/bll/searchReducer";
import SortModule from "../../p8-tableFilter/ui/SortModule/SortModule";

export const Packs = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packs.cardPacks)
    const {
        searchName,
        page,
        pageCount,
        productTotalCount
    } = useSelector((state: AppRootStateType) => state.search.tableProducts.settingsSearch)

    useEffect(() => {
        if (isAuth) {
            dispatch(getPacksTC())
            return
        }
        dispatch(getAuthUserDataTC())
    }, [dispatch])

    const newPacks = packs.map((p) => {
        const date = (new Date(p.updated)).toLocaleDateString() //возможность менять тип даты
        return <Pack key={p._id} pack={p} packDate={date}/>
    })

    if (!isAuth) return <Redirect to={PATH.LOGIN}/>

    const getPage = (newPage: number, newPageCount: number) => {
        dispatch(actionsSearch.setPageCount(newPage, newPageCount))
        dispatch(getPacksTC(newPage, newPageCount))
    };

    const onBtnAddPack = () => {
        dispatch(addPackTC())
    }


    return (
        <>
            <h5>Packs page</h5>
            <SearchTable/>
            table
            <div className={s.table}>
                <div className={s.tableHeader}>
                    <div className={s.tableHeader_packsName}>Name</div>
                    <div className={s.tableHeader_cardsCount}><SortModule arrayData={packs} title={'CardsCount'}/></div>
                    <div className={s.tableHeader_updated}>updated</div>
                    <div className={s.tableHeader_buttonAdd}>
                        <button onClick={onBtnAddPack}>add</button>
                    </div>
                </div>
                {newPacks}
                <div style={{
                    width: '100%'
                }}><Pagination page={page} pageCount={pageCount} productTotalCount={productTotalCount}
                               getPage={getPage}/></div>
            </div>
        </>
    )
}