import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Pricing from 'pages/pricing';
import Exchange from 'pages/exchange';
import Wallet from 'pages/wallet';
import { useState } from 'react';
import SignUp from 'pages/sign-up';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/pricing" exact element={<Pricing/>}></Route>
        <Route path="/exchange" exact element={<Exchange/>}></Route>
        <Route path="/wallet" exact element={<Wallet/>}></Route>
        <Route path="/sign-up" exact element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
