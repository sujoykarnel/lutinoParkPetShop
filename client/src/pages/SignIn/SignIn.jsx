import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const SignIn = () => {
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
        <legend className="fieldset-legend"> Sign In </legend>
        <form onSubmit={handleFormSubmit} className="grid gap-4">
          <label className="floating-label">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              className="input input-md w-full"
            />
            <span>Email</span>
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

          <div className="grid justify-items-center">
            <button className="btn w-full">Sign In</button>
          </div>
          <div>
            <p>
              Are you new ? Please{" "}
              <span className="link">
                <Link to={"/signUp"}>Sing Up</Link>
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

export default SignIn;
