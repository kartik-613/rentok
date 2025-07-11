  import React from 'react'
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Home from '../pages/Home';
  import Hairperson from '../pages/Hairperson';

  const MainRoute = () => {
    return (
      <>
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hairperson" element={<Hairperson />} />'
          </Routes>
        </Router>
      </>
    )
  }

  export default MainRoute
