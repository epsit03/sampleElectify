import { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { set } from 'mongoose';


function App() {
  const [user,setLoginUser] = useState({
    // name:"",
    // email:"",
    // password:""
  })
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user && user._id ? <Dashboard setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/register"element ={<Register/>}/>
        </Routes>
      </Router>
        </div>
    
  );
}

export default App;
