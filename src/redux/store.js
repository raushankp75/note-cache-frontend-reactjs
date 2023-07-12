import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userLoginReducer, userSignupReducer, userUpdateReducer } from './reducers/userReducers';
import { noteCreateReducer, noteDeleteReducer, noteUpdateReducer, notesListReducer } from './reducers/notesReducers';


const reducer = combineReducers({
    // this will contain our reducers
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    userUpdate: userUpdateReducer,
    
    notesList: notesListReducer,
    noteCreate: noteCreateReducer,
    noteUpdate: noteUpdateReducer,
    noteDelete: noteDeleteReducer,
    

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