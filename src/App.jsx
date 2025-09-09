import './App.css';
import './components/ItemList.css'
import Header from './components/Header.jsx';
import BackgroundImage from './components/BackgroundImage.jsx';
import ProjectList from './components/ProjectList.jsx';
import WorkList from './components/WorkList.jsx';
import AboutSection from './components/AboutSection.jsx';
import RedirectToOll from './components/RedirectToOll.jsx';

function App() {
  return (
    <>
    <RedirectToOll />
    <div className="app-container">
      <Header />
      <div className="fullpage-wrapper relative min-h-screen">
        <BackgroundImage path="/images/personal-site-background.jpg"/>
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
    </>
  );
}

export default App;
