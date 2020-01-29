import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar'

function App() {
  return (
    <div className="App">
      <Calendar todaysDate={"01/22/2020"}/>
    </div>
  );
}

export default App;
