import { takeEvery, put, delay, all } from "redux-saga/effects";
import {ADD_LIST_REQUEST
        ,ADD_LIST_SUCCESS
        ,ADD_LIST_FAILURE
        ,GET_LISTS_REQUEST
        ,GET_LISTS_SUCCESS
        ,GET_LISTS_FAILURE
        ,GET_LIST_BY_ID_REQUEST
        ,GET_LIST_BY_ID_SUCCESS
        ,GET_LIST_BY_ID_FAILURE
    } from '../types';

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
function* GetListAsync(action:any){
    try{
        yield put({type: GET_LISTS_SUCCESS,payload:action.payload});
    }catch(e){
        yield put({ type: GET_LISTS_FAILURE,error:action.error});
    }
}
function* GetListByIdAsync(action:any){
    try{
        yield put({type:GET_LIST_BY_ID_SUCCESS,payload:action.payload});
    }catch(e) {
        yield put({type:GET_LIST_BY_ID_FAILURE,payload:action.error});
    }
}

function* watchAddlist() {
    yield takeEvery(ADD_LIST_REQUEST, AddlistAsync);
    yield takeEvery(GET_LISTS_REQUEST,GetListAsync);
    yield takeEvery(GET_LIST_BY_ID_REQUEST, GetListByIdAsync);
}
export default function* rootSaga() {
    yield all([ watchAddlist()]);
}