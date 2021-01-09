import React from "react";
import './App.css';
import AppNavbar from "./components/AppNavbar";
import {Route} from 'react-router-dom';
import Home from "./page/Home";
import Store from "./page/Store";

function App() {
  return (
    <div>
        <AppNavbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/store" component={Store}/>
    </div>
  );
}

export default App;
