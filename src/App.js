import React from "react";

import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./pages/LoginPage";
import { InvestingBasics } from "./components/InvestingBasics/InvestingBasics";
import { FindCreditCard } from "./components/FindCreditCard/FindCreditCard";
import { PaymentTech } from "./components/PaymentTech/PaymentTech";
import { CardBenefits } from "./components/CardBenefits/CardBenefits";
import { DigitalWallets } from "./components/DigitalWallets/DigitalWallets";
import { Home } from "./pages/Home";
import { Profile } from "./components/DashBoard/Profile/Profile";
import { Register } from "./components/Register/Register";
// import { PrivateOutlet } from './components/PrivateOutlet/PrivateOutlet';
import { DashHome } from "./components/DashBoard/DashHome/DashHome";
import { AccountDetails } from './components/DashBoard/AccountDetails/AccountDetails';
import { Transaction } from './components/DashBoard/Transaction/Transaction';
import AdminLogin from './components/Admin/AdminLogin/AdminLogin';

import { CustomerDashboard } from './components/CustomerDashboard/CustomerDashboard';
import { EditCustomer } from './components/EditCustomer/EditCustomer';
import { CustomerProfile } from './components/CustomerDashboard/CustomerProfile/CustomerProfile';
import DashBoard from './components/DashBoard/DashBoard';








function App() {
  return (
    <Routes>
    
      <Route path="/" element={<Home />}>
        <Route index path="investing" element={<InvestingBasics />} />
        <Route path="creditcard" element={<FindCreditCard />} />
        <Route path="paymenttech" element={<PaymentTech />} />
        <Route path="cardbenefits" element={<CardBenefits />} />
        <Route path="wallets" element={<DigitalWallets />} />
      </Route>
 

      <Route path="/admin/dashboard" element={<DashBoard />}>
           
           <Route index element={<DashHome />} />
           <Route path="profile" element={<Profile />} />
           <Route path="account_details" element={<AccountDetails/>}>
           <Route path="edit/:id" element={<EditCustomer/>} />
           </Route>
         
           
          
           <Route path="transaction" element={<Transaction />} />
           <Route path="register" element={<Register />} />
          
    

      </Route>
      <Route path="/customer/dashboard" element={<CustomerDashboard />}>
        <Route index element={<DashHome />} />
        <Route path="profile" element={<CustomerProfile />} />
        <Route path="account_details" element={<AccountDetails />} />
        <Route path="transaction" element={<Transaction />} />
      
      </Route>

    
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adminlogin" element={<AdminLogin />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
