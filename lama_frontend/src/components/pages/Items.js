import React,{useState} from 'react'
import * as utils from '../../services/requests'
import { Link,useNavigate } from 'react-router-dom'
import Login from './AdminLoginPage'
import '../../App.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

export default function ItemsPage() {
let parsedResponse
let array
let responses
  utils
    .get("/allItems")
    .then((response) => {
     console.log(response.id);
     array = response.map((d) => <li key={d.name}>{d.name}</li>);
     parsedResponse = JSON.parse(response);
    })
    if (sessionStorage.getItem("user") === null) {
        window.alert("Unauthorized. Please Login")
        return < Login/>;
      }

 
    return (
  
<h2>${array}</h2>

    );
}