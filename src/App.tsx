import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import MainContainer from "./pages/home/MainContainer";

function App() {
    return (
        <Suspense fallback={'404'}>
            <Routes>
                <Route path={'/'} element={<MainContainer/>}/>
            </Routes>
        </Suspense>
    );
}

export default App;
