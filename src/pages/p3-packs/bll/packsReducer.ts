import {commonAPI, PackType} from "../../../api/api";
import {Dispatch} from "redux";
import {setIsLoggedInAC} from "../../p1-login/bll/loginReducer";

const initialState = {
    cardPacks: [] as Array<PackType>,
}

export const packsReducer = (state: InitialStateType = initialState, action: setPacksACType): InitialStateType => {
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
    commonAPI.getPacks()
        .then(res => {
            console.log(res);
            dispatch(setPacksAC(res.data.cardPacks))
        })
        .catch(err => {
            console.log('some err in getPacks');
        })
}


//types
type InitialStateType = typeof initialState
type setPacksACType = ReturnType<typeof setPacksAC>

