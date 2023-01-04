import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pay from './Pay'
import Success from './Success'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='pay' element={<Pay />} />
          <Route path='success' element={<Success />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App