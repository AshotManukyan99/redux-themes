import React from 'react';
import './App.css';
import Main from "./pages/main";
import {Provider} from "react-redux";
import {store} from "./store/store";


const App = (): JSX.Element => (
    <Provider store={store}>
        <Main/>
    </Provider>
)


export default App;
