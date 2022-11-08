import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import AdminLoginPage from './components/pages/AdminLoginPage'
import AdminDashboard from './components/pages/UserMenu'
import CustomerManagementPage from './components/pages/CustomerManagement'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <AdminLoginPage/> } />
                    <Route path="/dashboard" element={ <AdminDashboard/> } />
                    <Route path="/customermanagement" element={ <CustomerManagementPage/> } />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Developed by Batch 2 Project 3</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}