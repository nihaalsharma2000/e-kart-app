"use client";

import React, { useState } from "react";
import "./account.css";
import api from "@/customHooks/useAxios";
import { useRouter } from "next/navigation";

const AccountPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const payload = isLogin ? { email, password } : { name, email, password };

      const res = await api.post(endpoint, payload);
      const data = res.data;

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);

        if (data.user.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.error("Login/Register failed:", error);
      alert("Something went wrong. Please check your credentials.");
    }
  };

  return (
    <div className="login-page">
      <h1 className="login-title">{isLogin ? "Login" : "Register"}</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label>
              Name <span>*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="form-group">
          <label>
            Email address <span>*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            Password <span>*</span>
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-btn">
          {isLogin ? "LOG IN" : "REGISTER"}
        </button>

        <p
          className="toggle-auth"
          onClick={() => setIsLogin(!isLogin)}
          style={{ cursor: "pointer", marginTop: "1rem", color: "var(--primary)" }}
        >
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
};

export default AccountPage;
