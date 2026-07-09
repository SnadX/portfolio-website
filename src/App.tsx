import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/globals.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main className="page-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;