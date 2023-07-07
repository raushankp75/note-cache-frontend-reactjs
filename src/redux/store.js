import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userLoginReducer, userSignupReducer } from './reducers/userReducers';
import { noteCreateReducer, notesListReducer } from './reducers/notesReducers';


const reducer = combineReducers({
    // this will contain our reducers
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    
    notesList: notesListReducer,
    noteCreate: noteCreateReducer
})


// get from localstorage
const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;