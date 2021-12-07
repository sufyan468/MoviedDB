import {
  getAllMoviesSuccess,
  getAllMoviesFailure,
} from "../actions/allmovieAction";
import {
  getAllUpCommingsSuccess,
  getAllUpCommingsFailure,
} from "../actions/upcommingActions";
import {
  getAllTrendingSuccess,
  getAllTrendingFailure,
} from "../actions/trendingAction";

import {
  getMovieDetailSuccess,
  getMovieDetailFailure,
} from "../actions/moviesDetailsActions";

import { takeEvery, put, call } from "redux-saga/effects";
import {
  getAllDiscovers,
  getAllUpcomingsUrl,
  getAllTrendingsUrl,
  getMovieDetailUrl,
} from "../services/api";
import {
  GET_ALL_MOVIES,
  GET_ALL_UPCOMMINGS,
  GET_ALL_TRENDINGS,
  GET_MOVIE_DETAILS,
} from "../actions/allActionsTypes";

function* geturl() {
  try {
    const { data } = yield call(getAllDiscovers);

    console.log(" AllMoiesDiscover ssaga se arha hy ", data);
    if (data.results) {
      yield put(getAllMoviesSuccess(data.results));
    }
  } catch (error) {
    yield put(getAllMoviesFailure(error));
  }
}

export function* GetallMoviesUrl() {
  yield takeEvery(GET_ALL_MOVIES, geturl);
}
//
//
function* UpComUrl() {
  try {
    const { data } = yield call(getAllUpcomingsUrl);

    console.log(" AllUPCOMMINGS Movie Saga", data);
    if (data.results) {
      yield put(getAllUpCommingsSuccess(data.results));
    }
  } catch (error) {
    yield put(getAllUpCommingsFailure(error));
  }
}

export function* GetUpcommingsUrl() {
  yield takeEvery(GET_ALL_UPCOMMINGS, UpComUrl);
}

function* TrendingsUrl() {
  try {
    const { data } = yield call(getAllTrendingsUrl);

    console.log(" AllTrending Movie SAGA", data);
    if (data.results) {
      yield put(getAllTrendingSuccess(data.results));
    }
  } catch (error) {
    yield put(getAllTrendingFailure(error));
  }
}

export function* GetTrendingsUrl() {
  yield takeEvery(GET_ALL_TRENDINGS, TrendingsUrl);
}

function* movieDetail({ movieId }) {
  console.log(" movieID ", movieId);
  try {
    const { data } = yield call(getMovieDetailUrl, movieId);

    console.log(" Movies Details SAGA", data);
    if (data) {
      yield put(getMovieDetailSuccess(data));
    }
  } catch (error) {
    yield put(getMovieDetailFailure(error));
  }
}

export function* GetMovieDetails() {
  yield takeEvery(GET_MOVIE_DETAILS, movieDetail);
}
