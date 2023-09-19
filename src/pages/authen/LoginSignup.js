import React, { useState } from "react";
import NavbarTop from "../../components/Navbar/NavbarTop";
import { useSearchParams } from "react-router-dom";

export default function LoginSignup() {
  

  return (
    <>
    <div className="container bg-primary">
      <NavbarTop />
      
    </div>
    <div>
    <h1 className="text-center fw-bolder">Log in</h1>
      <form action="" className="form-group w-25 mx-auto" method='POST'>
        <input type="email" name="email" className="form-control my-4" />
        <input type="password" name="password" className="form-control my-4"/>
        <button type="submit" className="btn btn-primary w-100 rounded"> Log in </button>
      </form>
    </div>
    </>
  );
}
