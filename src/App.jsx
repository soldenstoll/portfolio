import './App.css';
import Header from '../portfolio/src/components/Header';
import BackgroundImage from '../portfolio/src/components/BackgroundImage';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="fullpage-wrapper">
        <BackgroundImage path="/images/personal-site-background.jpg"/>
        <p>TEST</p>
      </div>
    </div>
  );
}

export default App;
