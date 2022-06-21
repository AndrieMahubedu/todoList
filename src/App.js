import React from "react";

import ToDoList from './toDoList';
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";




function App() {
  return (
    <Router>
<div className="App">
  <Routes>
    <Route exact path="/" element={<ToDoList />} />  

   
    </Routes>      
    
    </div>
    </Router>
    
  );
}

export default App;