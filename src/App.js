```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
// Flight-related components
import Flights from './components/Flights';
import ManageTrips from './components/ManageTrips';
import ManageBooking from './components/ManageBooking';
import CheckIn from './components/CheckIn';
import FlightStatus from './components/FlightStatus';
// Vacation and package components
import Vacations from './components/Vacations';
import Packages from './components/Packages';
import Destinations from './components/Destinations';
// General service components
import Offers from './components/Offers';
import Deals from './components/Deals';
import Partners from './components/Partners';
import WestJetRewards from './components/WestJetRewards';
import LoyaltyProgram from './components/LoyaltyProgram';
// Support and information components
import Help from './components/Help';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
// Booking and account components
import BookNow from './components/BookNow';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
// Error handling
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Primary header component */}
        <Header />
        <main className="main-content">
          <Routes>
            {/* Core pages */}
            <Route path="/" element={<Home />} />
            
            {/* Flight services - comprehensive flight management */}
            <Route path="/flights" element={<Flights />} />
            <Route path="/manage-trips" element={<ManageTrips />} />
            <Route path="/manage-booking" element={<ManageBooking />} />
            <Route path="/check-in" element={<CheckIn />} />
            <Route path="/flight-status" element={<FlightStatus />} />
            
            {/* Vacation and packages - travel planning */}
            <Route path="/vacations" element={<Vacations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/destinations" element={<Destinations />} />
            
            {/* Services and partnerships - deals and rewards */}
            <Route path="/offers" element={<Offers />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/westjet-rewards" element={<WestJetRewards />} />
            
            {/* Loyalty program - merged multiple loyalty routes for consistency */}
            <Route path="/loyalty-program" element={<LoyaltyProgram />} />
            <Route path="/loyalty" element={<LoyaltyProgram />} />
            
            {/* Support and information - customer service */}
            <Route path="/help" element={<Help />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Account management - merged sign-in variations for better UX */}
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
            
            {/* Fallback route for 404 handling */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```