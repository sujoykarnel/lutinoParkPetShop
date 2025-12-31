import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const SignUp = () => {
  const { signInWithGoogle } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <fieldset className="max-w-md mx-auto m-4 p-4 border-2 rounded-2xl w-md">
        <legend className="fieldset-legend"> Sign Up </legend>
        <form onSubmit={handleFormSubmit} className="grid gap-4">
          <label className="floating-label">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
              className="input input-md w-full"
            />
            <span>Name</span>
          </label>
          <label className="floating-label">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="input input-md w-full"
            />
            <span>Email</span>
          </label>
          <label className="floating-label">
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
              required
              className="input input-md w-full"
              pattern="^[0-9]{11}$"
              inputMode="numeric"
              minLength="11"
              maxLength="11"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              title="Phone number must be exactly 11 digits"
            />
            <span>Phone Number</span>
          </label>
          <label className="floating-label">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              required
              className="input input-md w-full"
            />
            <span>Password</span>
          </label>
          <label className="floating-label">
            <input
              type="password"
              name="rePassword"
              placeholder="Re type Password"
              required
              className="input input-md w-full"
            />
            <span>Re-Password</span>
          </label>

          <div className="grid justify-items-center">
            <button className="btn w-full">Sign Up</button>
          </div>
          <div>
            <p>
              Have an account ? Please{" "}
              <span className="link">
                <Link to={"/signIn"}>Sing In</Link>
              </span>
            </p>
          </div>
        </form>

        <div className="divider">OR</div>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center gap-2 btn w-full btn-secondary"
          >
            <FaGoogle />
            Sign In with Google
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default SignUp;
