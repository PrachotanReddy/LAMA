import React from 'react'
import { Link } from 'react-router-dom'

export default function UserMenu() {
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
                <Link to="/">
                <button className="primary-button-userButton">Customer Data Management</button>
            </Link>
            <Link to="/">
                <button className="primary-button-userButton">Loan Card Management</button>
            </Link>
            <Link to="/">
                <button className="primary-button-userButton">Items Master Data</button>
            </Link></div>
        </div>
    )
}