import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { thunk } from "redux-thunk"
import homeReducer from "./reducers/homeReducer"
import detailReducer from "./reducers/detailReducer"



const rootReducer = combineReducers({
    home: homeReducer,
    detail: detailReducer,
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store