import { Store, createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import {
    connectRouter,
    RouterState,
    routerMiddleware
} from "connected-react-router";
import { all, fork } from "redux-saga/effects";
import { History } from "history";

import { authReducer, AuthState } from "./reducer";
import authSaga from "./sagas";

export interface AppState {
    router: RouterState;
    auth: AuthState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        auth: authReducer
    });

export function* rootSaga() {
    yield all([fork(authSaga)]);
}

const configureStore = (history: History): Store<AppState> => {
    const initialState = {};
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        createRootReducer(history),
        initialState,
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
export default configureStore;
