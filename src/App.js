import './App.css';
import Header from "./components/Header"
import Game from "./components/Game"
import Play from "./components/Play"
import {Routes,Route } from "react-router-dom";
import React,{useState} from "react";

function App() {

  const [score,setscore]=useState(0);
  const [mychoice,setmychoice]=useState("");



  return (
    <div className="container">
      <Header score={score}></Header>
      <Routes>
        <Route exact path="/" element={<Play setmychoice={setmychoice}></Play>}></Route>
        <Route exact path="/game" element={<Game mychoice={mychoice} score={score} setscore={setscore}></Game>}></Route>
      </Routes>
    </div>
  );
}

export default App;
