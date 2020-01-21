import { Reducer } from "redux";
import { AuthActionTypes } from "./actions";
import { getToken, setToken, isAuthenticated } from "../utils/auth";

export interface AuthState {
    readonly loading: boolean;
    readonly isAuthenticated: boolean;
    readonly token: string | null;
    readonly errors?: string;
}

export const initialState: AuthState = {
    token: getToken(),
    isAuthenticated: isAuthenticated(),
    loading: false
};

export const authReducer: Reducer<AuthState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_REQUEST: {
            return { ...state, loading: true };
        }
        case AuthActionTypes.LOGIN_SUCCESS: {
            setToken(action.payload);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        }
        case AuthActionTypes.LOGIN_ERROR: {
            return { ...state, errors: action.payload, loading: false };
        }
        default: {
            return state;
        }
    }
};
