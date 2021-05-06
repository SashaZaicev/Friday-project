import {actionsCheckIn} from "./checkInReducer";

export type CheckInUserType = {
    id: string,
    login: string,
    password: string,
    isSuccess: boolean,
    rememberMe: boolean,
    error: boolean,
    loading: boolean

}
type SetLoginUserActionType = ReturnType<typeof actionsCheckIn.setLogin>
type PostPasswordUserActionType = ReturnType<typeof actionsCheckIn.postPassword>
type PostPassword2UserActionType = ReturnType<typeof actionsCheckIn.postRepeatPassword>
type SetSuccessUserActionType = ReturnType<typeof actionsCheckIn.setSuccess>
type SetLoadingUserActionType = ReturnType<typeof actionsCheckIn.setLoading>
type SetErrorUserActionType = ReturnType<typeof actionsCheckIn.setError>
type PostRememberUserActionType = ReturnType<typeof actionsCheckIn.postRememberMe>
export type ActionsTypes =
    | SetLoginUserActionType
    | PostPasswordUserActionType
    | PostPassword2UserActionType
    | PostRememberUserActionType
    | SetSuccessUserActionType
    | SetErrorUserActionType
    | SetLoadingUserActionType