import {commonAPI, PackType} from "../../../api/api";
import {Dispatch} from "redux";
import {setStatusAC, setStatusActionType} from "../../p5-recoverPassword/bll/recoverPasswordReducer";

const initialState = {
    cardPacks: [] as Array<PackType>,
//    isSuccess: true
}

export const packsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case'packs/SET-PACKS':
            return {...state, cardPacks: action.packs}

        default:
            return state
    }
};

//AC
export const setPacksAC = (packs: Array<PackType>) => ({type: 'packs/SET-PACKS', packs} as const)


//thunk
export const getPacksTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC(true))
    commonAPI.getPacks()
        .then(res => {
            console.log(res);
            dispatch(setPacksAC(res.data.cardPacks))
        })
        .catch(err => {
            console.log('some err in getPacks');
        })
        .finally(() => {
            dispatch(setStatusAC(false))
        })
}


//types
type InitialStateType = typeof initialState
type ActionsTypes = setPacksACType | setStatusActionType
type setPacksACType = ReturnType<typeof setPacksAC>

