import React, { Component } from 'react';
// import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import Donorform from './donor form'
import eceiver from './receiver'
import Signup from './signup';
import Header from './header';

export default class wlcome extends Component{
    render(){
        return(
            <div>
            <Header/>
           <center>
            <h3>Welcome To Our App</h3>
            <p>What do you want? Donate or to Receive</p>
            <Link to='./receiver'> <button>Receive!</button></Link>
            <Link to='./donor form'> <button>Donate!</button></Link>
         </center>
            </div>
        )
    }
}