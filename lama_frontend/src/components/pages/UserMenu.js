import React from 'react'
import Login from './AdminLoginPage';
import { Link } from 'react-router-dom'

export default function UserMenu() {
    if (sessionStorage.getItem("user") === null) {
        window.alert("Unauthorized. Please Login")
        return < Login/>;
      }
    return (
        <div className='dashboard'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100vh",
        flexDirection: 'column'
      }}
    >
            <h2>Admin Dash Board</h2>
            <div>
                <Link to="/customermanagement">
                <button className="primary-button-userButton">Customer Data Management</button>
            </Link>
            <Link to="/cardmanagement">
                <button className="primary-button-userButton">Loan Card Management</button>
            </Link>
            <Link to="/itemmanagement">
                <button className="primary-button-userButton">Items Master Data</button>
            </Link>
            <Link to="/logout">
                <button className="primary-button-userButton">Logout</button>
            </Link></div>
            
        </div>
    )
}