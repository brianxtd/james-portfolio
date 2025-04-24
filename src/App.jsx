import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SocialMedia from './pages/SocialMedia';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Home />
              <About />
              <Projects />
              {/* <Contact /> */}
              <SocialMedia />
              <Footer />
            </>
          }
        />
        <Route path="/social" element={<SocialMedia />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
