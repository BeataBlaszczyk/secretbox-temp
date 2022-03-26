import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Secrets(props) {
  const [secrets, setSecrets] = useState([]);
  const myAppUrl = "http://localhost:3001";

  const {state} = useLocation();
const { isLogged } = state; // Read values passed on state
console.log(isLogged + "STATE")
const axios = require('axios');
let navigate = useNavigate();

  useEffect(() => {
    //function klik(){
       if (isLogged){
        Axios.get(myAppUrl+"/secrets").then((response) => {
           
            setSecrets(response.data)
           
          }).catch(error => {
              console.log(error)
          });
       
       }else{
        navigate("/");
       }
     },[])

  function logOut() {
    Axios.get("http://localhost:3001/logout").then((response) => {
      //
      console.log("WYLOGOWANO");
      //
    });
  }

  return (
    <div className="jumbotron text-center">
      <div className="container">
        <i className="fas fa-key fa-6x"></i>
        <h1 className="display-3">You've Discovered My Secret!</h1>

        {secrets.map( (element)=> {
             return(
          <div className="secret-container">
            <p className="secret-text">
              <span className="fire">
                <div className="myGrid">
                  🔥 <span class="rating">{element.rating}</span>
                  <img className="thumbUp" />
                  <img className="thumbDown" />
                </div>
              </span>
              <span className="secret-text">{element.content}</span>
            </p>
          </div>)
        })}

        <hr />

        <a className="btn btn-light btn-lg" onClick={logOut} role="button">
          Log Out
        </a>
        <a className="btn btn-dark btn-lg" href="/submit" role="button">
          Submit a Secret
        </a>
        {/* <button onClick={klik} > SEKRETY DEJ MNIE! </button> */}
      </div>
    </div>
  );
}

export default Secrets;
