import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-6">Sign up</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <button className="bg-gray-400 hover:bg-slate-600 hover:text-slate-100 p-2 rounded-lg disabled:opacity-30">
          SIGN UP
        </button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
