
import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';



function App() {
 const clientId = '3e30c79fa6204a669602b306d0c3cda4'
 const secret = 'e7ed1fce88a64051995f02a4ebf8f697'
 

useEffect(()=> {
  axios.post("https://accounts.spotify.com/api/token", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      'Authorization': 'Basic ' + btoa(clientId + ':' + secret)
    },
    body: 'grant_type=client_credentials'
    
  })
  .then((res)=> {
    console.log(res.data.access_token)
  })



},[])




  return (
    <div className="App">
     <h1>hi</h1>
    </div>
  );
}

export default App;
