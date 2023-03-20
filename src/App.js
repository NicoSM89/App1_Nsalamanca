import React, { Component } from "react";
import "./App.css";

//Componentes
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";

class App extends Component {
    render()
    {
        return (
            <div className="App">
                <NavBar />
                <Header />
            </div>
        );
    }
}

export default App;