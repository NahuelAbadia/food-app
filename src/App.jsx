import React from 'react';
import Home from './components/views/Home';
import Landing from './components/Landing';
import Error404 from './auth/Error404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/home' element={<Home />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;