import {commonAPI, PackType} from "../../../api/api";
import {Dispatch} from "redux";

const initialState = {
    cardPacks: [] as Array<PackType>,
}

export const packsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case'packs/SET-PACKS':
            return {...state, cardPacks: action.value}

        default:
            return state
    }
};

//AC
export const getPacksAC = (packs: any) => ({type: 'packs/SET-PACKS', packs} as const)


//thunk
export const getPacksTC = (value: any) => (dispatch: Dispatch) => {
    commonAPI.getPacks()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('some err in gPacks');
            console.log(err);
        })
}


//types
type InitialStateType = typeof initialState
