import { all } from "redux-saga/effects";
import mySagaWatcher from './mySaga';

export function* rootSaga() {
    yield all([mySagaWatcher()]);
}