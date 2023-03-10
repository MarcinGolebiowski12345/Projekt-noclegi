import React from "react";
import StoreProvider from "./store/StoreProvider";
import Header from "./components/Header";
import { HashRouter as Router } from "react-router-dom";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import Content from "./components/Content/Content";

import './App.scss';

function App() {
    return (
        <StoreProvider>
            <Header />
            <Router>
                <div className="content-wrapper">
                    <AsideMenu />
                    <Content />
                </div>
            </Router>
        </StoreProvider>
    );
}
export default App;