  import React from 'react'
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Home from '../pages/Home';
  import Hireperson from '../pages/Hireperson';

  const MainRoute = () => {
    return (
      <>
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hireperson" element={<Hireperson />} />'
          </Routes>
        </Router>
      </>
    )
  }

  export default MainRoute
