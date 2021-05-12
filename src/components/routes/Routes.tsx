import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {CheckIn} from "../../pages/p2-checkIn/ui/CheckIn";
import {Login} from "../../pages/p1-login/ui/Login";
import {NewPassword} from "../../pages/p6-newPassword/ui/NewPassword";
import {Profile} from "../../pages/p3-profile/ui/Profile";
import {RecoverPassword} from "../../pages/p5-recoverPassword/ui/RecoverPassword";
import {Error} from "../../pages/p4-404/ui/Error";
import {Packs} from "../../pages/p3-packs/ui/Packs";
import {Cards} from "../../pages/p3-cards/ui/Cards";
import SearchTable from "../../pages/p8-tableFilter/ui/SearchTable";

export const PATH = {
    HOME_PAGE: '/',
    LOGIN: '/login',
    NEW_PASSWORD: '/new-password/:token',
    CHECK_IN: '/check-in',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/recover_password',
    TEST_COMPONENT: '/testComponent',
    PACKS: '/packs',
    CARDS: '/cards',
    ERROR_404: '/404',
    SEARCH_TABLE: '/search_table'
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={PATH.CHECK_IN} render={() => <CheckIn/>}/>
                <Route exact path={['/', PATH.LOGIN]} render={() => <Login/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route exact path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route exact path={PATH.PASSWORD_RECOVERY} render={() => <RecoverPassword/>}/>
                <Route exact path={PATH.PACKS} render={() => <Packs/>}/>
                <Route exact path={PATH.CARDS} render={() => <Cards/>}/>
                <Route exact path={PATH.SEARCH_TABLE} render={() => <SearchTable/>}/>
                {/*<Route exact path={PATH.TEST_COMPONENT} render={() => <Test/>}/>*/}
                <Route path={PATH.ERROR_404} render={() => <Error/>}/>
                <Redirect from={'*'} to={PATH.ERROR_404}/>
            </Switch>
        </div>
    )
}