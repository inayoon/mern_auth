import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-2 max-w-l mx-auto">
      <h1 className="text-3xl text-center font-semibold my-6">Profile</h1>
      <form className="flex flex-col gap-2">
        <img
          className="h-20 w-20 self-center cursor-pointer rounded-full object-cover"
          src={currentUser.profilePicture}
          alt="avatar"
        />
        <input
          type="text"
          id="username"
          defaultValue={currentUser.username}
          placeholder="Username"
          className="bg-slate-200 rounded-lg p-3"
        />
        <input
          type="email"
          id="email"
          defaultValue={currentUser.email}
          placeholder="Email"
          className="bg-slate-200 rounded-lg p-3"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-200 rounded-lg p-3"
        />
        <button className="bg-slate-400 p-3 rounded-lg uppercase hover:bg-slate-700 hover:text-white disabled:opacity-70">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-2">
        <span className="text-red-600 cursor-pointer">Delete Account</span>
        <span className="text-red-600 cursor-pointer">Log out</span>
      </div>
    </div>
  );
}
