import './App.css';
import './components/ItemList.css'
import Header from './components/Header.jsx';
import BackgroundImage from './components/BackgroundImage.jsx';
import ProjectList from './components/ProjectList.jsx';
import WorkList from './components/WorkList.jsx';
import AboutSection from './components/AboutSection.jsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="fullpage-wrapper relative min-h-screen">
        <BackgroundImage path="personal-site-background.jpg"/>
        <header className='fixed top-0 w-full h-[94.8px] bg-[var(--background-color)] border-b-2 border-[var(--grid-line-color)] z-40'></header>
        <div className="content-below">
          <div className='framed-box' id="about">
            <AboutSection />
          </div>
          <div className='framed-box' id="projects">
            <ProjectList />
          </div>
          <div className='framed-box-bottom' id="experience">
            <WorkList />
          </div>
          <footer>
            <div className='framed-footer-text'>
              <p>© 2025 SOLDEN STOLL</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
