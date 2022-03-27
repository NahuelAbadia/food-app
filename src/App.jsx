import React from 'react';
import Login from './auth/Login'
import Home from './components/views/Home';
import Landing from './components/Landing';
import PrivateRoutes from './auth/PrivateRoutes';
import Error404 from './auth/Error404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const Token = useSelector(state => state.token)
  // console.log(Token)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route element={<PrivateRoutes Token={Token} />}>
            <Route exact path='/search' element={<Landing />} />
            <Route exact path='/home' element={<Home />} />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;