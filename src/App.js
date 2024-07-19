import './App.css';
import Home from "./Components/Home";
import React from "react";
import Service from "./Components/Service";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App w-screen">
        <Navbar/>
    <Home/>
<Service/>
  <Product/>
      <Blog/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
