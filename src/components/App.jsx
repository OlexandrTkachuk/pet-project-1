import '../styles/main.css';
import '../styles/reset.css';

import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import Contacts from 'pages/Contacts';

export default function App() {
  return (
    <div className="App">
      <Navigation />

      {/* <Home /> */}
      <Projects />
      {/* <Contacts /> */}

      <Footer />
    </div>
  );
}
