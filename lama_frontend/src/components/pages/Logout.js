import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as utils from "../../services/requests";


const Logout = () => {
    const navigate = useNavigate();

    const route_ = (path) => {
        navigate(path);
    }
    let UserId = sessionStorage.getItem("user");
    utils
    .get("/logout", {
      adminUserId: UserId
    }) 
    .then((response) => {
      if (response.data === "Logout successful") {
        sessionStorage.removeItem("user");
        window.alert("Logout successful");
         route_("/login");
      }
       else {
        window.alert("Logout Unsuccessful");
      }
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err.response.status);
    });

}

export default Logout;