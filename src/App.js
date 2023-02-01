import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About";
import Footer from './components/Footer';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as
    Router,
  Route,
  Routes,
  Link,
  Outlet
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");//Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(0 7 57)";
      showAlert("Dark mode on", "success")
      // document.title = "TextUtils-Dark Mode"

      // setInterval(()=>{
      //   document.title="Install Text Utils"
      // },2000)
      // setInterval(()=>{
      //   document.title="Text-Utils is Awesome"
      // },1500)
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode on", "success")
      // document.title = "TextUtils-Light Mode"
    }


  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <TextForm showAlert={showAlert} text="Enter text here to convert" title="Welcome to Text Converter" mode={mode} /> */}


        <Routes>
          <Route path="/" exact element={<TextForm showAlert={showAlert} text="Enter text " title="Welcome to Text Converter" mode={mode} />} />
          <Route path='/about' exact element={<About mode={mode}/>} />
        </Routes>
        
      </Router>

    </>

  );
}

export default App;






















