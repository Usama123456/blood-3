import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import hanks from './thanks';
import Signout from './signout';
import Header from './header';


export default class Donorform extends Component{
constructor(props){
    super(props)
this.donor=this.donor.bind(this);
}

donor(ev){
    ev.preventDefault;
    let don=this.refs.nm.value;
    let doage=this.refs.age.value;
    let doemail=this.refs.email.value;
    let doadd=this.refs.add.value;
    let docont=this.refs.cont.value;
    let doselect=this.refs.select.value;
    console.log(don,doemail,doadd,docont,doage,doselect);
    

}



render(){

var stylep={
    fontSize: '0.7em',
    position: 'relative',
    top: '-1.5em',
    left: '-5em'
}
let stylesel={
        position: 'relative',
    top: '-3.3em',
    left: '2.5em'
}

const styleb={
    position: 'relative',
    left: '-2em'
}
    return(<div>
   <Header/>
    <center>
        <h3>Donor Registration Form</h3>
        <input ref='nm' placeholder='Name' type='name' ></input> <br/><br/>
        <input ref='age' placeholder='Age' type='age' ></input> <br/><br/>
        <input ref='email' placeholder='Email' type='email'></input> <br/><br/>
        <input ref='add' placeholder='Address' type='address'></input> <br/><br/>
        <input ref='cont' placeholder='Contact' type='contact'></input> <br/><br/>
        <p style={stylep}>Blood group</p>
        <select style={stylesel} ref='select'>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
        
        </select>
        <Link to='./thanks'> <button onClick={this.donor} style={styleb}>Submit</button></Link>
     </center> 
      

      
    
        </div>          
        
    )
}
}

