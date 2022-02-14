import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import './css/Auth.scss';
import './css/Home.scss';
import './css/Menu.scss';
import Home from './pages/Home';
import OurCompany from './pages/OurCompany';
import HowItWorks from './pages/HowItWorks';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Admin from './pages/admin/Admin';
import Auth from './components/general/Auth'
import { ModalAuthContext } from './Context';
// import SingUp from './pages/SingUp';
// import SingIn from './pages/SingIn';

function App() {
  const [activeModal, setActiveModal] = useState(false)
  const [authActif, setAuthActif] = useState('SignIn')

  return (
    <ModalAuthContext.Provider
      value={{
        activeModal,
        setActiveModal,
        authActif,
        setAuthActif
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact strict path="/home" component={Home}/>
          <Route exact strict path="/our-company" component={OurCompany}/>
          <Route exact strict path="/how-it-works" component={HowItWorks}/>
          <Route exact strict path="/faqs" component={FAQs}/>
          <Route exact strict path="/contact" component={Contact}/>
          {/* <Route exact strict path="/sing-in" component={SingIn}/>
          <Route exact strict path="/sing-up" component={SingUp}/> */}
          <Route path="/admin" component={Admin}/>
        </Switch>
      
        <Auth
          active={activeModal}
          setActive={setActiveModal}
          authActif={authActif}
        />
      </BrowserRouter>
    </ModalAuthContext.Provider>
  );
}

export default App;
