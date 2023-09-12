import React, { useState } from "react";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-3 rounded w-25 border">
        <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="form-control rounded-0"
              onChange={e => setValues({...values, email: e.target.value})}
              value={values.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-control rounded-0"
              onChange={e => setValues({...values, password: e.target.value})}
              value={values.password}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Log in
          </button>
          <p>You are agree to our terms and policies</p>
        </form>
      </div>
    </div>
  );
}
