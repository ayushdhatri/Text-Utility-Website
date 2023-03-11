import React, { useState } from "react";

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Practice from "./components/Practice";
import Practice2 from "./components/Practice2";
import Alert from "./components/Alert";
import { Router } from "react-router-dom";

function App() {
  const [style1, setMyStyle1] = useState({
    color: "black",
  });
  const [style3, setMyStyle3] = useState({
    color: "black",
  });
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      setMyStyle1({
        color: "#E5B8F4",
      });
      setMyStyle3({
        color: "#03C988",
      });
      setAlert({
        msg: "Dark Mode has been enabled",
        type: "success",
      });
      setInterval(() => {
        setAlert(null);
      }, 3000);

      document.body.style.backgroundColor = "#13005A";
    } else {
      setMode("light");
      setMyStyle1({
        color: "black",
      });
      setMyStyle3({
        color: "black",
      });
      setAlert({
        msg: "Light Mode has been enabled",
        type: "success",
      });
      setInterval(() => {
        setAlert(null);
      }, 3000);
      
      document.body.style.backgroundColor = "lightcyan";
    }
  }
  
  return (
    <>
    
      <div className="nav_container">
        <Navbar Mode={mode} ToogleMode={toggleMode} />
      </div>
      <Alert showalert={alert} />
      <div className="main_container">
        <div className="container">
          <TextForm h1text={style1} previewtext={style3} alert={alert} setAlert={setAlert} />
        </div>
      </div>
     
    </>
    
  );
}

export default App;
