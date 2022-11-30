import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/App.css";

import Header from './componant/Header';
import TypeTaskes from './componant/Type-tasks';
import AddTask from './componant/Add-task';
import TasksContainer from './componant/Tasks-container';
import Footer from './componant/Footer';

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <TypeTaskes />
            <AddTask />
            <TasksContainer />
            <Footer />
        </BrowserRouter>
    )
}

export default App;