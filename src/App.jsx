import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carasol';
import RecommendedItems from './components/RecommendedItems';
import BestSellers from './components/BestSellers';
import Footer from './components/Footer';
import ShoppingTweet from './components/ShoppingTweet';
import Mobile from './components/Mobile';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <div className='wrap'>
        <Header />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <>
                <div className="first-container">
                  <Carousel />
                  <RecommendedItems />
                </div>
                <div className="second-container">
                  <BestSellers />
                  <Mobile />
                </div>
                <ShoppingTweet />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
