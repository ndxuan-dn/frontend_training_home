
import React,{ useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StudentManagement from './studentList';
import ReactHookForm from './reactHookForm';

function App() {

  return (
    <div className="App">

      <nav>
        <ul>
          <li><Link to="/react-hook-form">Vi du ve React hook form</Link></li>
          <li><Link to="/student-management">Quan Ly sinh vien</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<StudentManagement/>} />
        <Route path='/student-management' element={<StudentManagement/>} />
        <Route path='/react-hook-form' element={<ReactHookForm/>} />

      </Routes>
    </div>
  );
}

export default App;


// firebase login
// firebase init
// firebase deploy