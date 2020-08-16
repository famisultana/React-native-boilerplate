import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./src/Redux/reducers";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import SplashScreen from 'react-native-splash-screen'

//REDUX SETUP

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ['userReducer']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [thunk];
const store = createStore(
    persistedReducer,
    {},
    compose(
        applyMiddleware(...middleware)
    )
);
const persistor = persistStore(store, {}, () => {
    SplashScreen.hide();
    setConfig()
});


//API SETUP

const url = '';

var headers={};

//FUNCTION TO LOAD TOKEN AND USER ID

const setConfig = () => {
    var data = store.getState();
    var token = null;
    var id = null;

    if (data['userReducer'] !== null) {
        token = data["userReducer"]['_token']
        id = data["userReducer"]['id']
    }

    headers = {
        'Content-Type': 'application/json',
        'secret': token,
        'id': id
    };
}



export { store, persistor, url, setConfig, headers}