import './App.css';
import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navigation from './Components/Header';
import HomePage from './Components/Home';
import WorkPage from './Pages/WorkPage';
import ResumePage from './Components/Resume';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer';

function App(){
  return (
    <div className="bg">
      <Router>
          <Navigation/>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/work' component={WorkPage}/>
            <Route path='/resume' component={ResumePage}/>
            <Route path='/contact' component={ContactPage}/>
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}


export default App;