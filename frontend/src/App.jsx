import React from "react";
import StoreProvider from "./store/StoreProvider";
import Header from "./components/Header";

import './App.scss';

function App() {
    return (
        <StoreProvider>
            <Header />
        </StoreProvider>
    );
}
export default App;