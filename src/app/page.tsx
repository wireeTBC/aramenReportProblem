'use client';

import { useRouter } from 'next/navigation';

import { useState } from "react";
import jwt from "jsonwebtoken";

const LoginPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter()
  const handleLogin = async () => {
    // const userId = "123";
    // const token = jwt.sign({ userId }, "your-secret-key", { expiresIn: "1h" });
    // document.cookie = `token=${token}; path=/; HttpOnly; SameSite=Strict`;

    // Redirect to the dashboard
    router.push("/dashboard");
  };

  return (
    <section className="bg-neutral-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <img
          src="../assets/aramen.svg"
          alt="A RAMEN Icon"
          width={72}
          height={72}
          className="absolute mb-80"
        />
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-2 md:space-y-2">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login
            </h1>
            <div >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  user
                </label>
                <input
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 "
                  placeholder="user ID"
                />
              </div>
              <div>
                <label className=" text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-400 block w-full p-2.5  "
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full text-white bg-primary-600 hover:bg-black-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-4 text-center"
                style={{
                  backgroundColor: "rgb(198 34 45/var(--tw-bg-opacity))",
                }}
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
