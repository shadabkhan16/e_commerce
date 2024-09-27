import { useState } from "react";
import image from "../assets/Left.png";

const IsSignIn = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignToggle = () => {
    setIsSignIn(!isSignIn);
    console.log("clicked");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
          <img src={image} alt="Chair" className="rounded-lg" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold" onClick={handleSignToggle}>
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            <p className="text-gray-500">
              {isSignIn
                ? "Don't have an account yet?"
                : "Already have an account?"}
              <a
                href="#"
                onClick={handleSignToggle}
                className="text-green-500 cursor-pointer"
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </a>
            </p>
          </div>

          {/* Conditional Form Fields */}
          <form>
            {!isSignIn && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700">Your name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </>
            )}

            <div className="mb-4">
              <label className="block text-gray-700">
                {isSignIn ? "Username or Email" : "Email address"}
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <span className="absolute right-2 top-2 cursor-pointer text-gray-500">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
            </div>

            {!isSignIn && (
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500"
                  />
                  <span className="ml-2 text-gray-700">
                    I agree with{" "}
                    <a href="#" className="text-green-500">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-500">
                      Terms of Use
                    </a>
                  </span>
                </label>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IsSignIn;
