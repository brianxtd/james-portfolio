import React from "react";

export default function Contact() {
  return (
    <section className="container my-5" id="contact">
      <h2 className="text-center mb-4">Contact Me</h2>
    
    <hr />

      <form className="w-100 mx-auto" style={{ maxWidth: 600 }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </section>
  );
}
