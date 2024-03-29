import React, { useState } from "react";
import { useAuth } from "./auth";
import { Link,useNavigate } from "react-router-dom"; // Import Link from react-router-dom
// Inside the handleLogin function


function Login() {

  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [branchcode, setBranchcode] = useState("");
  const [error, setError] = useState("");

  const history=useNavigate();

  const handleLogin = async () => 
  {

    try {
      await login(username, password, branchcode)
      .then(res=>
            history("/home",{state:{id:username}}))
      // Redirect to the dashboard or other protected routes on successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-2">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-2xl transform sm:rounded-3xl"></div>
        <div className="relative px-2 py-6 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Login to Raavan Motor Insurance
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="username"
                    name="username"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Username
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="branchcode"
                    name="branchcode"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Branchcode"
                    value={branchcode}
                    onChange={(e) => setBranchcode(e.target.value)}
                  />
                  <label
                    htmlFor="branchcode"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Branch Code
                  </label>
                </div>
                <div className="relative">
                  <button
                    onClick={handleLogin}
                    className="bg-green-500 text-white rounded-md px-4 py-2 mr-2"
                  >
                    Submit
                  </button>
                  <Link
                    to="/register" // This should match the path of the RegisterForm route
                    className="text-green-500 hover:text-green-700 font-bold"
                  >
                    Register
                  </Link>
                </div>
                {error && <p className="text-red-500">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;