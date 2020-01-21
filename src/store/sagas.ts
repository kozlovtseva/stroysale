import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";

import { authenticate } from "../utils/API";
import { LogInSuccess, LogInError } from "./actions";
import { AuthActionTypes } from "./actions";

function* authorize({ payload }: AnyAction) {
    try {
        const res = yield call(authenticate, payload);
        if (res.hasOwnProperty("status") && res.status === 200) {
            const token = res.result;
            yield put(LogInSuccess(token));
        } else {
            yield put(LogInError(res.error));
        }
    } catch (error) {
        yield put(LogInError(error));
    }
}
function* watchLogInhRequest() {
    yield takeLatest(AuthActionTypes.LOGIN_REQUEST, authorize);
}

function* authSaga() {
    yield all([fork(watchLogInhRequest)]);
}

export default authSaga;
