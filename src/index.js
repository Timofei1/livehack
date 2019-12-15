import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './sw';
import "./index.css";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import  {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./store/reducers/rootReducer";
import thunk from 'redux-thunk';
import vk_app from "./api";
vk_app.initApp();
registerServiceWorker();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));