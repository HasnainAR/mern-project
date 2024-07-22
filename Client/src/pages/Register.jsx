import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate ();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //avoid refresh
    try {
   
        const response = await fetch(`http://localhost:5000/api/auth/register`,{
            method : "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),});
            if(response.ok){
                setUser({
                  username: "",
                  email: "",
                  phone: "",
                  password: "",
                });
                navigate("/login");


            }
            else{
              const res_data = await response.json();
              console.log("server response",res_data);
            }
           
    } catch (error) {
        console.log("register",error);
        
    }
}
   

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
                  src="/images/register.png"
                  alt=""
                  width="400"
                  height="500"
                />
              </div>

              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
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
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
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
                    Register Now
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

export default Register;
