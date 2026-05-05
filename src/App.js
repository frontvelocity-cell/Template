import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Flights from './components/Flights';
import Vacations from './components/Vacations';
import Offers from './components/Offers';
import ManageTrips from './components/ManageTrips';
import CheckIn from './components/CheckIn';
import FlightStatus from './components/FlightStatus';
import WestJetRewards from './components/WestJetRewards';
import Help from './components/Help';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/vacations" element={<Vacations />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/manage-trips" element={<ManageTrips />} />
            <Route path="/check-in" element={<CheckIn />} />
            <Route path="/flight-status" element={<FlightStatus />} />
            <Route path="/westjet-rewards" element={<WestJetRewards />} />
            <Route path="/help" element={<Help />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;