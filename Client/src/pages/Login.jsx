import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { jwtDecode } from "jwt-decode";


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // avoid refresh
    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const res_data = await response.json();
            console.log(res_data);

            // Get the token from the response and decode it
            const token = res_data.token;
            const decodedToken = jwtDecode(token);

            // Extract user data from the decoded token
            const { userId, email, name, phone, isAdmin } = decodedToken;
            console.log({ userId, email, name, phone, isAdmin });

            // Optionally store user data in state or context
            setUser({
                email: "",
                password: "",
            });

            // Navigate to a protected route or homepage
            navigate('/protected');

        } else {
            const error_data = await response.json();
            console.error('Login error:', error_data);
        }
    } catch (error) {
        console.log('register', error);
    }
};

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div
              className="container grid grid-two-cols"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "00px", // Adjust gap as needed
              }}
            >
              <div className="registration-image reg-img">
                <img
                  src="/images/login.png"
                  alt=""
                  width="400"
                  height="500"
                />
              </div>

              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default Login;
