import React from "react";
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <section className="container my-5 text-center" id="SocialMedia">
      <h2 className="mb-4">Follow Me</h2>
      <p className="lead">Stay connected and follow my work on social media:</p>

      <div className="d-flex justify-content-center gap-4 mt-4">
        <a
          href="www.linkedin.com/in/james-eghievha-1b73382aa"
          className="btn btn-outline-primary d-flex align-items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>

        <a
          href="https://www.facebook.com/eghievhajames"
          className="btn btn-outline-primary d-flex align-items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={24} /> Facebook
        </a>

        <a
          href="https://www.instagram.com/brianxtd"
          className="btn btn-outline-primary d-flex align-items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} /> Instagram
        </a>
      </div>
    </section>
  );
}
