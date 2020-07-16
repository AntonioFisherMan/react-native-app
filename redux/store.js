import thunk from "redux-thunk";
import thunkMiddleware from 'redux-thunk'

const { combineReducers, createStore,applyMiddleware,compose } = require("redux");
const { default: PatientReducer } = require("./PatientsReducer");



const reducers=combineReducers({
    patients:PatientReducer
})


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store=createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store