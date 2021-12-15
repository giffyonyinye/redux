import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from './Actions/action'; 

export default function* mySagaWatcher() {
    console.log('Test Watcher');
    yield takeLatest('ROTATE', mySagaWorker);
}

export function* mySagaWorker(action) {
    console.log(action);
    console.log('Rotate Watcher...............');

    yield put(actions.rotateActionFromSaga(action.payload));
}