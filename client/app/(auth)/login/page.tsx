"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/user/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
       
        setError(error.message);
      } else if (typeof error === 'object' && error !== null && 'response' in error) {
         
        const axiosError = error as { response?: { data?: { error?: string } } };
        setError(axiosError.response?.data?.error || 'Login failed');
      } else {
        
        setError('Login failed');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white via-blue-900 to-white">
      <form
        onSubmit={handleLogin}
        className="bg-black/30 p-8 rounded-xl border border-gray-800 shadow-2xl w-96 backdrop-blur-lg"
      >
         
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Welcome back to Virasat
          </h1>
          <h2 className="text-gray-400 text-sm">
            Please enter your details to sign in
          </h2>
        </div>

         
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 mb-4">
            <p className="text-red-500 text-sm text-center">{error}</p>
          </div>
        )}

         
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-400 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-400 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

         
        <div className="flex items-center justify-center"> 
        <button
          type="submit"
          className="w-1/2 mt-6 px-4 py-3 rounded-lg bg-black text-white font-medium  border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
        >
          Login
        </button>
        </div>
         
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
          >
            Forgot your password?
          </a>
        </div>
        <div className="mt-6 text-center">
          <a
            href="/signup"
            className="text-sm text-white hover:text-blue-500 transition-colors"
          >
            Register
          </a>
        </div>
      </form>
    </div>
  );
}
