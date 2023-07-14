import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Pricing from 'pages/pricing';
import Exchange from 'pages/exchange';
import Wallet from 'pages/wallet';
import SignUp from 'pages/sign-up';
import Login from 'pages/log-in';
import PasswordReset from 'pages/reset-password';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from 'firebase.js';
import { authContext } from 'context/authContext';
import NotFound from 'pages/not-found';
import UserAction from 'pages/user-action';
function App() {
  const [isLogged, setIsLogged] = useState();
  function logOutUser() {
    signOut(auth).then(() => {
      setIsLogged(false);
    }).catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      }
      else {
        setIsLogged(false);
      }
    })
  },[setIsLogged]);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<authContext.Provider value={{isLogged:isLogged,logOutUser:logOutUser}}><Home/></authContext.Provider>}></Route>
        <Route path="/pricing" exact element={<authContext.Provider value={{isLogged:isLogged,logOutUser:logOutUser}}><Pricing/></authContext.Provider>}></Route>
        <Route path="/exchange" exact element={<authContext.Provider value={{isLogged:isLogged,logOutUser:logOutUser}}><Exchange/></authContext.Provider>}></Route>
        <Route path="/wallet" exact element={<authContext.Provider value={{isLogged:isLogged,logOutUser:logOutUser}}><Wallet/></authContext.Provider>}></Route>
        <Route path="/sign-up" exact element={<authContext.Provider value={{isLogged:isLogged,logOutUser:logOutUser}}><SignUp/></authContext.Provider>} />
        <Route path="/log-in" exact element={<authContext.Provider value={{isLogged:isLogged,logOutUser:logOutUser}}> <Login/></authContext.Provider>} />
        <Route path="/reset-password" exact element={<authContext.Provider value={{isLogged:isLogged,logOutUser:logOutUser}}><PasswordReset/></authContext.Provider>} />
        <Route path="/user-action" exact element={<authContext.Provider value={{isLogged:isLogged,logOutUser:logOutUser}}><UserAction/></authContext.Provider>} />
        <Route path="/*" element={<authContext.Provider value={{isLogged:isLogged,logOutUser:logOutUser}}><NotFound/></authContext.Provider>} />
      </Routes>
    </div>
  );
}

export default App;
