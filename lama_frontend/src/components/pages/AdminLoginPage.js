import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
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
            <form action="/home">
                <p>
                    <input type="text" name="username" placeholder='Username' required />
                </p>
                <p>
                    <input type="password" name="password" placeholder='Password' required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
        </div>
    )
}