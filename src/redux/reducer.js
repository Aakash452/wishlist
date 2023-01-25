import * as types from './actiontypes'

const initialState = {
    user: {},
    displayNav: true,
    authenticated: false,
    stagedUser: {},
    stagedForVerification: false
}

export default function reducer(state = initialState, action) {
    if (action.type === types.updateState) {
        return {
            ...state,
            ...action.update
        }

    } else {
        return state

    }
}