import './App.css';
import Header from './components/Header.jsx';
import BackgroundImage from './components/BackgroundImage.jsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="fullpage-wrapper relative min-h-screen">
        <BackgroundImage path="/images/personal-site-background.jpg"/>
        <div className="content-below">
          <p>TEST</p>
        </div>
      </div>
    </div>
  );
}

export default App;
