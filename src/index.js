import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root  = ReactDOM.createRoot(document.getElementById('root'));

//wrqaping the app with the browser router to rnable the usage odf the routes in the app
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)



