import '../styles/main.css';
import { Route, Routes } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import ProjectPage from 'pages/ProjectPage';
import Contacts from 'pages/Contacts';

import ScrollToTop from 'utils/scrollToTop';

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}
