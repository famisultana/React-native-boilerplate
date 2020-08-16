import types from "../types"

export const userReducer = (state = null, action) => {
    switch(action.type) {
        case types.SIGN_IN:
            return action.payload;
        case types.SIGN_OUT:
            return null;

        default:
            return state
        }
}

