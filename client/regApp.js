
import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import EventList from './components/EventList';
import Login from './components/Login'
import PopUp from './components/PopUp';
import Register from './components/Register';


import { Provider } from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

 render() {
   return (
 
    
     
   
       <div className='App'>
        
       <Register/>
          
       
      
      
        
       
      
          </div>

   );
 }
}

export default App;