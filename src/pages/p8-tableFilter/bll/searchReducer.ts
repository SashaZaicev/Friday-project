import {Dispatch} from "redux";

export interface IItemsTable {
    id: string;
    itemName: string;
    price: number;
}

export interface IItemsSettings {
    minPrice: number;
    maxPrice: number;
    min: number;
    max: number;

    searchName: string;
    sortProducts: string;

    productTotalCount: number;
    page: number;
    pageCount: number;
}

export interface ITableState {
    tableProducts: {
        items: IItemsTable[];
        settingsSearch: IItemsSettings;
    };
}

export const InitialState: ITableState = {
    tableProducts: {
        items: [
            {itemName: 'qwertt', price: 122, id: 'qwer112'},
            {itemName: 'zxxxtt', price: 1332, id: 'qwer152'},
            {itemName: 'zxxxtt', price: 1332, id: 'qwer1252'},
            {itemName: 'dfdstt', price: 1223432, id: 'qwer122'}
        ],
        settingsSearch: {
            minPrice: 1000,
            maxPrice: 9000,
            min: 1000,
            max: 9000,

            searchName: '',

            sortProducts: '',

            productTotalCount: 7,
            page: 1,
            pageCount: 10,
        }
    },

};
const SET_SEARCH_NAME = "SET_SEARCH_NAME"


export const searchReducer = (state = InitialState, action: any) => {
    switch (action.type) {
        case  SET_SEARCH_NAME: {

            return {
                ...state,
                tableProducts: {
                    ...state.tableProducts,
                    settingsSearch: {
                        ...state.tableProducts.settingsSearch, searchName: action.searchName
                    }
                }
            }
        }
        default:
            return state;
    }
};

export const actionsSearch = {
    setSearchName: (searchName: string) => ({type: SET_SEARCH_NAME, searchName}) as const,
}

export const getSearch = () => {
    return (dispatch: Dispatch) => {
        console.log()
        // request.getSearch(searchName).then(response => {
        //     if (response === 0) {
        //         dispatch(acceptFollow(userId))
        //     }
        //     dispatch(toggleFollowingProgress(false, userId))
        // })
    }
}
// export const follow = (userId: number) => {
//     return (dispatch: Dispatch) => {
//         dispatch(toggleFollowingProgress(true, userId))
//         usersApi.follow(userId).then(response => {
//             if (response === 0) {
//                 dispatch(acceptFollow(userId))
//             }
//             dispatch(toggleFollowingProgress(false, userId))
//         })
//     }
// }