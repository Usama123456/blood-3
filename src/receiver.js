import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import Signup from './signup';
import Header from './header';
import Donorform from './donor form'
export default class eceiver extends Component{
    render(){
        var stylep={
    fontSize: '0.7em',
    position: 'relative',
  
    top: '-4.5em',
    left: '-6em'
}
let stylesel={
        position: 'relative',
    top: '-5.7em',
    left: '2.5em'
}
        return(<div>
      <Header/>
           <center>
         <p style={stylep}>Select blood group</p>
        <select style={stylesel}>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
        
        </select>
        <button style={{position: 'relative', top: '-4em',left: '-1.3em'}}>Check</button>
        </center>
        </div>

        )
    }
}