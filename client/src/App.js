
import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import EventList from './components/EventList';
import PopUp from './components/PopUp';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Provider } from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';


class App extends Component {

 render() {
   return (
 
    
     <Provider store={store}>
   
       <div className='App'>
         <AppNavbar />
         <Router>
         <Route exact path="/login" component={Login} />
         </Router>
          <Container>
       
      <Login/>
      
        
            <PopUp />
           <EventList />
           </Container>
          </div>
     </Provider>
   );
 }
}

export default App;