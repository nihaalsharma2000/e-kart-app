"use client";

import React, { useState } from "react";
import "./account.css";
import Pagebar from "../components/Pagebar/Pagebar";

const AccountPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="login-page">
      <h1 className="login-title">Login</h1>

      <form className="login-form">
        <div className="form-group">
          <label>Username or email address <span>*</span></label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Password <span>*</span></label>
          <input type="password" required />
        </div>

        <div className="form-footer">
          <label className="remember">
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <button type="submit" className="login-btn">LOG IN</button>

        <div className="password-link">
          <a href="#">Lost your password?</a>
        </div>
      </form>
    </div>
    </>
  );
};

export default AccountPage;
