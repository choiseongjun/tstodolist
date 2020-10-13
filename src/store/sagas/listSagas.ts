import { takeEvery, put, delay, all } from "redux-saga/effects";
import {ADD_LIST_REQUEST
        ,ADD_LIST_SUCCESS
        ,ADD_LIST_FAILURE} from '../types';

function* AddlistAsync(action:any) {
    yield delay(1000);
    console.log("saga")
    console.log(action.payload)
    try{
        yield put({ type: ADD_LIST_SUCCESS, payload:action.payload });
    }catch(e){ 
        yield put({ type: ADD_LIST_FAILURE,error:action.error});
    }
}


function* watchAddlist() {
    yield takeEvery(ADD_LIST_REQUEST, AddlistAsync);
}
export default function* rootSaga() {
    yield all([ watchAddlist()]);
}