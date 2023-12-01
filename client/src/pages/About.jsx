import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl mb-4 text-slate-800">About</h1>
      <p className="mb-2 text-slate-700 font-sans">
        This is a MERN (MongoDB, Express, React, Node.js) stack web application
        built with the authentication. It allows users to sign up, log in, and
        log out, and provides access to protected routes only for authenticated
        users.
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
