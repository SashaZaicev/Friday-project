import React, {useState} from 'react';
import s from './search.module.css'
import {actionsSearch, getSearch} from "../bll/searchReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import MultiRangeSlider from "./MultiRangeSlider/MultiRangeSlider";
import Pagination from "./Pagination/Pagination";


const SearchTable = () => {
    const dispatch = useDispatch()
    const {tableProducts} = useSelector((state: AppRootStateType) => state.search)
    const {page, pageCount, productTotalCount} = tableProducts.settingsSearch
    const tableSearch = (searchName: string) => {
        dispatch(actionsSearch.setSearchName(searchName))
    }
    const getResult = () => {
        dispatch(getSearch())
    }
    const getPage = (newPage: number, newPageCount: number) => {
        dispatch(getSearch(newPage, newPageCount))
    };

    const currentItems = tableProducts.items.map(el => <tr key={el.id}>
        <td>{el.itemName}</td>
        <td>{el.price}</td>
        <td></td>
    </tr>)
    return (
        <div className={s.searchTable}>
            <div>
                <input className={s.inputSearch}
                       value={tableProducts.settingsSearch.searchName}
                       onChange={(e) => tableSearch(e.currentTarget.value)} type="text"
                       placeholder={'Введите значение для поиска'}
                />
            </div>
            <div><MultiRangeSlider/></div>
            <div>
                <button onClick={getResult}>Поиск (Search)</button>
            </div>
            <div className={s.tableBlock}>
                <table>
                    <thead>
                    <tr>
                        <th>itemName</th>
                        <th>price</th>
                        <th>
                            <button>КНОПОЧКА-ПУСТЫШКА</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentItems}
                    </tbody>
                    <Pagination page={page} pageCount={pageCount} productTotalCount={productTotalCount}getPage={getPage}/>
                </table>
            </div>
            {/*<div>{tableProducts.loading ? 'LOADING...' : 'FALSE'}*/}
            {/*{tableProducts.items.filter(el=>(el.itemName===tableProducts.settingsSearch.searchName))*/}
            {/*    .map((item)=>(<div>{item.itemName}</div>))}</div>*/}
        </div>
    );
};


export default SearchTable