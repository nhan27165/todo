// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// //import { getListAminal } from '../api/getAnimals'
// //import axios from 'axios'
//
// async function getListAminal () {
// 	let api = await fetch(`https://dog.ceo/api/breeds/list`)
// 	let data = await api.json()
// 	return data.message
// }
//
// // worker Saga: will be fired on SAGA_FETCH_REQUESTED actions
// function* fetchData(action) {
//    try {
//       const data = yield call(getListAminal);
//       yield put({type: "SAGA_FETCH_SUCCEEDED", list: data});
//    } catch (e) {
//       yield put({type: "SAGA_FETCH_FAILED", message: e.message});
//    }
// }
//
// /*
//   Starts fetchUser on each dispatched `SAGA_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
// function* mySaga() {
//   yield takeEvery("SAGA_FETCH_REQUESTED", fetchData);
// }
//
// /*
//   Alternatively you may use takeLatest.
//
//   Does not allow concurrent fetches of user. If "SAGA_FETCH_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// // function* mySaga() {
// //   yield takeLatest("SAGA_FETCH_REQUESTED", fetchData);
// // }
//
// export default mySaga;