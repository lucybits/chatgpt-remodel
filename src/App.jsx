import 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/start" />} />

        <Route path="/start" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
