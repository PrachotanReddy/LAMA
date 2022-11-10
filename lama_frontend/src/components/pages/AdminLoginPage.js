import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as utils from "../../services/requests";
import '../../App.css'


function Login() {
  const navigate = useNavigate();
  
  const route_ = (path) => {
    navigate(path);
  };

let [UserId, setUserId] = useState(0);
let [UserPassword, setUserPassword] = useState("");

let handleSubmit = (e) => {
  e.preventDefault();
  utils
    .post("/login", {
        adminUserId: UserId,
      adminPassword: UserPassword,
    })
    .then((response) => {
      if (response.data === "Login Successful") {
        sessionStorage.setItem("user", UserId);
        route_("/dashboard");
      }
       else {
        window.alert("Invalid credentials");
        route_("/login");
      }
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err.response.status);
    });
    };

    return (
        <div className="text-center m-5-auto" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%",
            height: "100vh",
            flexDirection: 'column',
            background:'#222'
          }}>
            <h2>LAMA Login</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" name="username" placeholder='Username' required  value={UserId}  onChange={(e) => setUserId(e.target.value)} />
                </p>
                <p>
                    <input type="password" name="password" placeholder='Password' required   value={UserPassword}  onChange={(e) => setUserPassword(e.target.value)}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
        </div>
    )
}
export default Login;
