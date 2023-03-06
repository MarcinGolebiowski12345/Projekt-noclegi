import React from "react";
import StoreProvider from "./store/StoreProvider";

function App() {
    return (
        <StoreProvider>
            <div className="App">
                <h1>Hello World!!!</h1>
            </div>
        </StoreProvider>
    );
}
export default App;