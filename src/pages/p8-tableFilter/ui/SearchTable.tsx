import React, {useState} from 'react';
import s from './search.module.css'
import {actionsSearch, getSearch} from "../bll/searchReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";


const SearchTable = () => {
    const dispatch = useDispatch()
    const {tableProducts} = useSelector((state: AppRootStateType) => state.search)

    const tableSearch = (searchName:string) => {
        dispatch(actionsSearch.setSearchName(searchName))
    }
    const getResult = () => {
        dispatch(getSearch())
    }

    // const newItem = tableProducts.items.map(el=><div>{el.itemName}{el.price}</div>)
    return (
        <div className={s.searchTable}>
            <div>
                <input className={s.inputSearch}
                       value={tableProducts.settingsSearch.searchName}
                       onChange={(e)=>tableSearch(e.currentTarget.value)} type="text"
                       placeholder={'Введите значение для поиска'}
                />
            </div>
            <button onClick={getResult}>Поиск (Search)</button>
            {tableProducts.items.filter(el=>(el.itemName===tableProducts.settingsSearch.searchName))
                .map((item)=>(<div>{item.itemName}</div>))}
        </div>
    );
};


export default SearchTable;


//
// import React, { Component } from "react";
//
// export default function UncontrolledFormComponent() {
//     let inputRef = React.createRef();
//     let name = "";
//     const handleClick = e => {
//         e.preventDefault();
//         alert("Name is: " + inputRef.current.value);
//     };
//
//     return (
//         <div>
//             <h3>Uncontrolled Form Component</h3>
//             <form>
//                 <input type="text" ref={inputRef} />
//                 <button style={{ margin: "8px" }} onClick={handleClick}>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// }