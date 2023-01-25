import { updateState } from "./actiontypes"
import store from './store'

export function userAuthLogin(localStorage, userData) {
    store.dispatch({
        type: updateState,
        update: {
            user: userData.user_details,
            authenticated: true,
            stagedForVerification: false,
            stagedUser: {}
        }
    })

    // Object.keys(userData.user_details).forEach(field => {
    //     localStorage.setItem(field, userData.user_details[field])
    // })

    // Store token in localStorage separately for auto login in future
    localStorage.setItem('token', userData.token)
}

export function manuallyUnstageUser() {
    // USE THIS ONLY WHEN A USE CASE REQUIRES TO DO THAT, ELSE: userAuthLogin does it already
    store.dispatch({
        type: updateState,
        update: {
            stagedUser: {},
            stagedForVerification: false
        }
    })
}

export function stageUserForVerification(userData) {
    // Stages user data for verification, opens directly verify otp page when clicked on login when set to true
    store.dispatch({
        type: updateState,
        update: {
            stagedForVerification: true,
            stagedUser: userData
        }
    })
}