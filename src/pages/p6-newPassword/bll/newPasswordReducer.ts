const initialState = {}
export const newPasswordReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "": {
            return {}
        }
        default:
            return state;
    }
};