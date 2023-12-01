import React from "react";

export default function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl mb-4 text-slate-800">Authentication App</h1>
      <p className="mb-2 text-slate-700 font-sans">
        This is a full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It includes authentication features that
        allow users to sign up, log in, and log out. Plus it also provides
        access to protected routes only for authenticated users.
      </p>
      <p className="mb-2 text-slate-700 font-sans">
        The front-end application is built with React and uses React Router for
        client-side routing. And back-end is built with Node.js and Express.js
        and uses MongoDB as the database. Authentication is implemented using
        JSON Web Tokens(JWT).
      </p>
    </div>
  );
}
