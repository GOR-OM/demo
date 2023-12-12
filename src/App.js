import React from 'react';
import {
  
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
