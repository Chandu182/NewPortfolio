import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About, Article, Blog, Experience, Home, SkillSet } from './components/pages';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  // Conditionally render the Navbar only if not on the Home (root) page
  const showNavbar = location.pathname !== '/';
  const showFooter = location.pathname !== '/';
  return (
    <div className={`App ${theme}`}>
      {showNavbar && <Navbar theme={theme} setTheme={setTheme} />}
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/About" element={<About theme={theme} />} />
        <Route path="/Article" element={<Article theme={theme} />} />
        <Route path="/Blog" element={<Blog theme={theme} />} />
        <Route path="/Experience" element={<Experience theme={theme} setTheme={setTheme} />} />
        <Route path="/SkillSet" element={<SkillSet theme={theme} setTheme={setTheme} />} />
      </Routes>
      {showFooter && <Footer />} 
    </div>
  );
}
export default App;
