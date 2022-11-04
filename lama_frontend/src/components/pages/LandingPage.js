import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function LandingPage() {
    return (
        <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100vh",
        background: "#222",
        flexDirection: 'column'
      }}
    >
      <h1 className="main-title text-center">LAMA</h1>
            <p className="main-para text-center">GIS Global</p>
                <Link to="/login">
                    <button className="primary-button">Admin Log In</button>
                </Link>
            
    </div>
    )
}
