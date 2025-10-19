import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegister from '../pages/auth/UserRegister.jsx';
import UserLogin from '../pages/auth/UserLogin.jsx';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister.jsx';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin.jsx';
import ChooseRegister from '../pages/auth/ChooseRegister.jsx';
import Home from '../pages/general/Home.jsx';
import CreateFood from '../pages/food-partner/CreateFoodPartner.jsx';
const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/user/register" element={<UserRegister/>} />
          <Route path="/user/login" element={<UserLogin/>} />
          <Route path="/food-partner/register" element={<FoodPartnerRegister/>} />
          <Route path="/food-partner/login" element={<FoodPartnerLogin/>} />
          <Route path="/choose-register" element={<ChooseRegister/>} />
          <Route path="/" element={<Home/>} />
          <Route path='/create-food' element={<div>Create Food Page - To be implemented</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes
