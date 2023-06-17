import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import logo from "../public/Numidia_Logo.png";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const EmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const PasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("response");
    try {
      const response = await fetch("http://localhost:3001/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Email: enteredEmail,
          Mdp: enteredPassword,
        }),
      });
      const json = await response?.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(json));
        console.log(response);
        router.push("/Dashbord");
      } else {
        if (response.status === 400 || response.status === 409)
          setError("error");
      }
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      <div className="login flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className=" mb-10">
          <Image src={logo} alt="logo" />
        </div>
        <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 bg-opacity-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required=""
                  onChange={EmailChangeHandler}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                  onChange={PasswordChangeHandler}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 ">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline "
                >
                  Forgot password?
                </a>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Log in
              </button>
              <p className="text-sm text-center ">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Sign up
                </a>
              </p>
              {error ? (
                <div
                  class="flex items-center bg-transparent text-red-600 text-sm font-bold px-4 py-3"
                  role="alert"
                >
                  <p>Incorrect credentials , please check them again</p>
                </div>
              ) : (
                <></>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}