import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "antd"
import Login from "./Components/Login";
import Burgers from "./Components/Burgers";
import Pizzas from "./Components/Pizzas";
import HotDogs from "./Components/HotDogs";
import Burritos from "./Components/Burritos";
import Muffins from "./Components/Muffins";
import Sandwiches from "./Components/Sandwiches";
import Noodles from "./Components/Noodles";
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/css/all.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}>
                <Route path={"/burger"} element={<Burgers/>} />
                <Route path={"/sandwich"} element={<Sandwiches/>} />
                <Route path={"/pizza"} element={<Pizzas/>} />
                <Route path={"/hotDog"} element={<HotDogs/>} />
                <Route path={"/burrito"} element={<Burritos/>} />
                <Route path={"/muffin"} element={<Muffins/>} />
                <Route path={"/noodle"} element={<Noodles/>} />
            </Route>
            <Route path={"/login"} element={<Login/>} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
