import React , {useState,useEffect}from 'react'
import {useHistory,useLocation} from "react-router-dom";
import axios from 'axios';
import './AddEdit.css';

const initialState = {
  name:"",
  email:"",
  contact:"",
};


function AddEdit() {

  const [state, setState] = useState(initialState);
  const {name, email,contact} = initialState;
  return (
    <div style={{marginTop:"100px"}}> 
    <form style={{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:"center",}}>
      <label htmlFor='name'>Name</label>
      <input type="text" id="name" name="name" placeholder='Enter Name ..' onChange={handleInputChange} value={name} />
      <label htmlFor='email'>Email</label>
      <input type="email" id="email" name="email" placeholder='Enter Email ..' onChange={handleInputChange} value={email} />
      <label htmlFor='contact'>Contact</label>
      <input type="text" id="contact" name="contact" placeholder='Enter contact ..' onChange={handleInputChange} value={contact} />








    </form>





    </div>
  )
}

export default AddEdit