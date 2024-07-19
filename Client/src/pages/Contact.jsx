import React from 'react'
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
    <section id="error-page">
      <div className=" content">
        <h4>Sorry! Page under development!</h4>
        <p>
          Oops! It seems like the page you're trying to is still under development!
        </p>
        <div className="btns">
          <NavLink to="/">return home</NavLink>
        </div>
      </div>
    </section>
  </>
  )
}

export default Contact