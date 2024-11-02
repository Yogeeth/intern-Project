import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/adminpanel/Login';
import DashBoard from './components/adminpanel/DashBoard';
import EnterCode from './components/client/EnterCode';
import ContactForm from './components/client/ContactForm';
import HomePage from './components/HomePage';
import ProtectedRoute from './ProtectedROute';
import ShootingStars from './components/adminpanel/shootingStars';
import ViewFroms from './components/client/ViewForms';


export default function App() {
  const [code, setCode] = useState(""); 
  const [form,setForms] = useState("");
  
  console.log("form=",form)
  const handleData = (data) => {
    setCode(data); 
    console.log('Received code:', data);
  };

  const handleForm = (data)=>{
    console.log("Data=",typeof(data))
    setForms(data)
    
  }

  return (
    <div>
      <Router>
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashBoard />
                        </ProtectedRoute>
                    }
                />
          <Route path="/contactForm" element={<EnterCode handle={handleData} />} />
          <Route path={`/:name/:id`} element={<ContactForm handleForm={handleForm} />} />
          <Route path={`/stars`} element={<ShootingStars />} />
          <Route path={`/viewforms/client/:id`} element={<ViewFroms />} />
        </Routes>
      </Router>
    </div>
  );
}
