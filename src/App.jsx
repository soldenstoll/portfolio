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
          <div className='framed-box'>
            <div>
              <h1>TEST</h1>
              <p>test</p></div>
          </div>
          <div className='framed-box-bottom'>
            <div>
              <h1>TEST</h1>
              <p>test</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
