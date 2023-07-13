import React from 'react';
import './App.css';
import { StartQuiz } from './components/StartQuiz';

function App() {
  return (
    <div className="App-Container">
      <header className="App-header">
         Welcome to Marvel MCU Quiz
      </header>
     <StartQuiz />
    </div>
  );
}

export default App;
