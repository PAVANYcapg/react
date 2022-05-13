import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './userpage';
import AdminPage from './adminpage';
import LoginUser from './loginuser';
import LoginAdmin from './loginadmin';
import RegisterUser from './registeruser';
import RegisterAdmin from './registerlogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<LoginAdmin/>}></Route>
        <Route path="/admin/register" element={<RegisterAdmin/>}></Route>
        
        <Route path="/" element={<LoginUser/>}></Route>
        <Route path="/register" element={<RegisterUser/>}/>
        <Route path="/home/user" element={<UserPage/>}></Route>
        <Route path="/home/admin" element={<AdminPage/>}></Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
