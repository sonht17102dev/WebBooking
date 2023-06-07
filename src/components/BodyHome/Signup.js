import React from "react";

const Signup = (props) => {
  return (
    <div className="row signup justify-content-center align-items-center text-center mt-3  pt-4 pb-4">
      <div className="signup-content">
        <h1>Save time, save money!</h1>
        <p>Sign up and we'll send the best deals to you </p>
      </div>

      <form className="form-group col-lg-6 row form-signup justify-content-between">
        <input type="email" placeholder="Your email" className="col-lg-9" />
        <input
          type="button"
          value="Subscribe"
          className="btn btn-primary col-lg-3 subscribe"
        />
      </form>
    </div>
  );
};
export default Signup;
