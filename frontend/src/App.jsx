import React from "react";
import StoreProvider from "./store/StoreProvider";
import Header from "./components/Header";
import { HashRouter as Router } from "react-router-dom";
import AsideMenu from "./components/AsideMenu/AsideMenu";

import './App.scss';

function App() {
    return (
        <StoreProvider>
            <Header />
            <Router>
                <div className="content-wrapper">
                    <AsideMenu />
                </div>
            </Router>
        </StoreProvider>
    );
}
export default App;