import { combineReducers } from "redux";

import { movieReducer } from "./movieReducer";
import { UpcommingReducer } from "./upcommingReducer";
import { TrendingReducer } from "./trendingReducer";
import { peopleReducer } from "./peopleReducer";
import { movieDetailReducer } from "./movieDetailReducer";
import { peopleDetailReducer } from "./peopleDetailReducer";

const allReducers = combineReducers({
  movie: movieReducer,
  upcoming: UpcommingReducer,
  trending: TrendingReducer,
  people: peopleReducer,
  movieDetail: movieDetailReducer,
  peopleDetail: peopleDetailReducer,
});
export default allReducers;
