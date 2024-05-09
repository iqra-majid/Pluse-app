// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabeled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#092440";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtills - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtills - WhiteMode";
    }
  };

  return (
    <>

    <BrowserRouter>
      <Navbar title="textUtils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      <div className="container">
          <Routes>
            <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="TextUtills-Word Counter,Character Counter" mode={mode} /> } ></Route>
             <Route exact path="/about" element={<About mode={mode} />}></Route> 
          </Routes>
          </div>
      
     </BrowserRouter>
    </>
  );
}

export default App;
