import {Dispatch} from "redux";
import {CardType, commonAPI} from "../../../api/api";
import {AppRootStateType} from "../../../app/store";
import {ThunkDispatch} from "redux-thunk";


const initialState = {
    cards: [] as Array<CardType>,
    packUserId: '',
    cardsTotalCount: 0,
    page: 1,
    pageCount: 10,
    question: '',
    answer: '',
    minGrade: 0,
    maxGrade: 5,
    error: ''
}

export const cardsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'CARDS/SET-CARDS': {
            return {
                ...state,
                cards: action.cards,
                // packId:
                packUserId: action.packUserId,
                page: action.page,
                cardsTotalCount: action.cardsTotalCount,
                pageCount: action.pageCount
            }
        }
        default:
            return state
    }
}

//action creators

export const setCardsAC = (cards: Array<CardType>, packUserId: string, page: number, cardsTotalCount: number, pageCount: number) =>
    ({type: 'CARDS/SET-CARDS', cards, packUserId, page, cardsTotalCount, pageCount} as const)


//thunk

export const getCardTC = (packId: string) => (dispatch: ThunkDispatch<AppRootStateType, void, ActionsType>) => {
    commonAPI.getCards(packId)
        .then((res) => {
            console.log(res);
            dispatch(setCardsAC(res.data.cards, res.data.packUserId, res.data.page, res.data.cardsTotalCount, res.data.pageCount))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            console.log(error);
        })
}

export const addCardTC = (packId: string) => (dispatch: ThunkDispatch<AppRootStateType, void, ActionsType>) => {
    commonAPI.addCard(packId)
        .then(() => {

            dispatch(getCardTC(packId))

        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            console.log(error);
        })
}
export const deleteCardTC = (packId: string, cardId: string) => (dispatch: ThunkDispatch<AppRootStateType, void, ActionsType>) => {
    commonAPI.deleteCard(cardId)
        .then(() => {
            dispatch(getCardTC(packId))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            console.log(error);

        })
}
export const updateCardTC = (packId: string, cardId: string) => (dispatch: ThunkDispatch<AppRootStateType, void, ActionsType>) => {
    debugger
    commonAPI.updateCard(cardId)
        .then(() => {
            dispatch(getCardTC(packId))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            console.log(error);

        })
}


//types
export type initialStateType = typeof initialState
export type ActionsType =
    | ReturnType<typeof setCardsAC>

