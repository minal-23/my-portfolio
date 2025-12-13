import Experience from './components/Experience';
import Header from './components/Header';
import './App.css';
import Projects from './components/Projects';
import ParticleBackground from './components/ParticleBackground';
import TypingText from './components/TypingText';
import Connect from './components/Connect';

function App() {

  return (
    <div className="App">
     
      <ParticleBackground/>
       <Header/>
      <div className="App-header">
        <div flexDirection="row" id="about">
        <TypingText/>
        <p className="summary">
          I’m a software engineer from Bengaluru, India. I'm fascinated by large-scale, high-impact products  and contributed to major system upgrades and infrastructure migration in industry-leading services.
        </p>
         </div>
        <Connect/>
        <Experience/>
      <Projects/>
      <p style={{color:"#A9A9A9",fontSize:"15px"}}>Built and designed by Minal K</p>
      <p style={{color:"#A9A9A9",fontSize:"15px"}}>All rights reserved. ©</p> 
    </div>
    </div>
  );
}

export default App;
