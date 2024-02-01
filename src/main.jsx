import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style/global/index.css'
import Header from './component/Header/main.jsx'
import Home from './pages/Home/main.jsx'
import Appartements from './pages/Appartements/main'
import Footer from './component/Footer/main'
import Err404 from './pages/Erreur404/main'
import About from './pages/About/main'
// const {id} = useParams()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appartements/:id" element={<Appartements />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Err404 />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
