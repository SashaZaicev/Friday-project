import {commonAPI, PackType} from "../../../api/api";
import {Dispatch} from "redux";
import {setIsLoggedInAC} from "../../p1-login/bll/loginReducer";
import {AppRootStateType} from "../../../app/store";
import {actionsSearch} from "../../p8-tableFilter/bll/searchReducer";

export const initialState = {
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
type GetStore=()=>AppRootStateType

//thunk
export const getPacksTC = (newPage?: number, newPageCount?: number) => (dispatch: Dispatch, getStore:GetStore) => {
    const {min, max, searchName, page, pageCount, sortProducts} = getStore().search.tableProducts.settingsSearch
    commonAPI.getPacks( min, max, searchName,newPage || page, newPageCount || pageCount, sortProducts )
        .then(res => {
            console.log(res);
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(actionsSearch.setProductTotalCount(res.data.cardPacksTotalCount))
        })
        .catch(err => {
            console.log('some err in getPacks');
        })
}


//types
type InitialStateType = typeof initialState
type setPacksACType = ReturnType<typeof setPacksAC>

