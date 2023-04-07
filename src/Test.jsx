
import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import HomeStudent from './Pages/HomeStudent';


import LoginPage from './Authentication/LoginPage';
import HomePage from './Authentication/HomePage';

export default function Test() {
  return (
    
      <div>
            <Router>
             
  
          <Routes>
            <Route exact path="/" element={<HomePage/>}>
             
            </Route>
  
            <Route path="/login"  element={< LoginPage/>}>
            </Route>
  
            <Route path="/homestudent" element={<HomeStudent/>} >
            </Route>

          </Routes>
  
      </Router>
        
      </div>
  );
}