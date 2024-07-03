import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Comic from './components/Comic';
import Projects from './components/Projects';
import Home from './components/Home'; // Import the Home component
import './fonts/css/styles.css'


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/comic" element={<Comic />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} /> {/* Home route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
