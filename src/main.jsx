import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './component/Header/main.jsx'
import Home from './pages/Home/main.jsx'
import Appartements from './pages/Appartements/main'
import Footer from './component/Footer/main'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/appartements" element={<Appartements />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
