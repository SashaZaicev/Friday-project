import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../components/routes/Routes";
import {PackType} from "../../../../api/api";
import s from './pack.module.css'
import {useDispatch, useSelector} from "react-redux";
import ModalQuestionContainer from "../../../../components/Modals/ModalQuestion/ModalQuestionContainer";
import ModalUpdateContainer from "../../../../components/Modals/ModalUpdate/ModalUpdateContainer";
import {AppRootStateType} from "../../../../app/store";
import {deletePackTC, setPackIdAC, updatePackTC} from "../../bll/packsReducer";
import {getCardTC} from "../../../p3-cards/bll/cardsReducer";
import {Cards} from "../../../p3-cards/ui/Cards";

type PackPropsType = {
    pack: PackType
    packDate: string // для нового типа даты
}

export const Pack = ({pack, packDate}: PackPropsType) => {
    const dispatch = useDispatch()
    const userName = useSelector<AppRootStateType, string>(state => state.login.name)

    let [name, setName] = useState<string>(pack.name)
    const onChange = (value: string) => { setName(value) }

    const onBtnDeletePack = () => {
        dispatch(deletePackTC(pack._id))
    }
    const onBtnUpdatePack = (name: string) => {
        dispatch(updatePackTC(pack._id, name))
    }

    const disabled = userName !== pack.user_name

    const onBtnCardsClick = () => {
        dispatch(getCardTC(pack._id))
        dispatch(setPackIdAC(pack._id))
    }

    return <>
        <div className={s.tableBody}>
            <div className={s.tableBody_name}>{pack.name}</div>
            <div className={s.tableBody_cardsCount}>{pack.cardsCount}</div>
            <div className={s.tableBody_updated}>{packDate}</div>
            <div className={s.tableBody_user}>{pack.user_name}</div>
            <div className={s.tableBody_buttons}>
                {/*<button onClick={onBtnDeletePack}>del</button>*/}
                <ModalQuestionContainer modalName={"del"} onButtonModal={onBtnDeletePack} disabled={disabled}/>
                {/*<button onClick={onBtnUpdatePack}>update</button>*/}
                <ModalUpdateContainer modalName={"update"} onButtonModal={onBtnUpdatePack}
                                      value={name} onChange={onChange} buttonTrue={"Update"} title={'Set new name'}
                                      disabled={disabled}/>
                <NavLink to={PATH.CARDS}>cards</NavLink>
                {/*<button onClick={onBtnDeletePack}>del</button>
                <button onClick={onBtnUpdatePack}>update</button>*/} {/*это вроде старые кнопки, на удаление*/}
                <button onClick={onBtnCardsClick}><NavLink to={PATH.CARDS}>cards</NavLink></button>
                <button>train</button>
            </div>
        </div>
    </>
}