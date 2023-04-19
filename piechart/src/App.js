import './App.css';
import React from 'react';
import DonutChart from './components/DonutChart';
import Header from './components/Header';
import Combination from './components/Combination';

function App() {
  return (
    <>
    <Header/>
    <Combination/>
    <DonutChart />
    </>
  );
}

export default App;
