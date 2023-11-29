import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      //fetch 말고 axios 사용하는걸로 나중에 바꿔보기
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        return setError(true);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-6">Sign up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-gray-400 hover:bg-slate-600 hover:text-slate-100 p-2 rounded-lg disabled:opacity-30"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
      <p className="text-red-600">{error && "Something went wrong"}</p>
    </div>
  );
}
