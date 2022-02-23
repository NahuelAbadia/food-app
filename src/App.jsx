import React from 'react';
import Login from './components/auth/Login'
import PrivateRoute from './components/auth/PrivateRoute';
import Home from './components/views/Home';
import DescPlatos from './components/DescPlatos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />

          {/* <PrivateRoute exact path='/home' element={<Home />} /> */}

          <Route exact path='/home' element={<Home />} />
          <Route exact path='/description/:id' element={<DescPlatos />} />

          {/* Método de midudev, indagar mas */}

          {/* <Route exact path='/' render={() =>{
          return user ? null : <Login />
        }} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;