import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Dashboard from './components/Dashboard.js';
import Setpassword from "./components/Setpassword";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Setpassword" element={<Setpassword />} />
      </Routes>
    </BrowserRouter>
  );
};
