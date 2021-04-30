import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Routes} from "../components/routes/Routes";
import {Header} from "../components/header/Header";

function App() {
    return (
        <div className="App">
            <>
                <HashRouter>
                    <Header/>
                    <Routes/>
                </HashRouter>
            </>

        </div>
    );
}

export default App;
