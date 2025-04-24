import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          © {new Date().getFullYear()} James. Built with React & Bootstrap.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="/" className="text-white text-decoration-none">Home</a>
          <a href="/#projects" className="text-white text-decoration-none">Projects</a>
          <a href="/#contact" className="text-white text-decoration-none">Contact</a>
          <a href="/social" className="text-white text-decoration-none">Follow Me</a>
        </div>
      </div>
    </footer>
  );
}
