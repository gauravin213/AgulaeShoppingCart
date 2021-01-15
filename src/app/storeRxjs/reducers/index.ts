
import { Store, combineReducers } from '@ngrx/store';
import { counterReducer } from "./counter.reducer";
export default combineReducers({
    combineReducerFeatureA: counterReducer,
});