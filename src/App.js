```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
// Flight-related components
import Flights from './components/Flights';
import ManageTrips from './components/ManageTrips';
import CheckIn from './components/CheckIn';
import FlightStatus from './components/FlightStatus';
// Vacation and package components
import Vacations from './components/Vacations';
import Packages from './components/Packages';
// General service components
import Offers from './components/Offers';
import Partners from './components/Partners';
import WestJetRewards from './components/WestJetRewards';
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
        <Header />
        <main className="main-content">
          <Routes>
            {/* Core pages */}
            <Route path="/" element={<Home />} />
            
            {/* Flight services */}
            <Route path="/flights" element={<Flights />} />
            <Route path="/manage-trips" element={<ManageTrips />} />
            <Route path="/check-in" element={<CheckIn />} />
            <Route path="/flight-status" element={<FlightStatus />} />
            
            {/* Vacation and packages */}
            <Route path="/vacations" element={<Vacations />} />
            <Route path="/packages" element={<Packages />} />
            
            {/* Services and partnerships */}
            <Route path="/offers" element={<Offers />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/westjet-rewards" element={<WestJetRewards />} />
            
            {/* Support and information */}
            <Route path="/help" element={<Help />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Account management */}
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
            
            {/* Fallback route */}
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