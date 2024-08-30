import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
   const [alert, setAlert]= useState(null);

  const showAlert = (message, type) =>{
        setAlert({
          msg: message,
          type:type
        })
        setTimeout(() =>{
            setAlert(null);
        }, 1500);
  }

  const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#212529';
        showAlert("Dark mode has been enabled", "sucess");
      }
        
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "sucess");
      }
  }

  return (
   <>   
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
            <Route path="/about" element={<About mode={mode}/>} />
            {/* Redirect any undefined routes to the home page */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
   </>
  );
}

export default App;
