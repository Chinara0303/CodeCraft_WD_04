import './App.scss';
import Topbar from "./components/Topbar/Topbar"
import Works from "./components/Works/Works"
import Skills from "./components/Skills/Skills"
import Intro from "./components/Intro/Intro"
import { useEffect, useState } from 'react';
import Menu from './components/Menu/Menu';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  const [menuOpen, setmenuOpen] = useState(false)
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    !loading && (
      <div className='App'>
        <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <div className="sections">
          <Intro/>
          <AboutMe/>
          <Skills/>
          <Works/>
        </div>
      </div>
    )

  );
}

export default App;
