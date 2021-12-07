import { all, fork } from "redux-saga/effects";

import {
  GetallMoviesUrl,
  GetUpcommingsUrl,
  GetTrendingsUrl,
  GetMovieDetails,
} from "./allMoviesDiscoverSaga";
import { GetAllPeopleUrl, GetPeopleDetails } from "./peopleSaga";

export default function* rootSaga() {
  yield all([
    fork(GetallMoviesUrl),
    fork(GetUpcommingsUrl),
    fork(GetTrendingsUrl),
    fork(GetAllPeopleUrl),
    fork(GetMovieDetails),
    fork(GetPeopleDetails),
  ]);
}
