import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/App.css";

import Header from './componant/Header';
import TypeTaskes from './componant/Type-tasks';

const App = () => {

    return (
        <>
            <Header />
            <TypeTaskes />
        </>
    )
}

export default App;