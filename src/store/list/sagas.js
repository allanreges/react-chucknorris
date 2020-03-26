import api from '../../services/api';
import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { updateListSuccess } from './actions';

function* createList() {
    const response = yield call(api.get, 'categories');
    yield put(updateListSuccess(response.data));
}

export default all([
    takeLatest('UPDATE_LIST', createList),
]);