import React from "react";

export default function Dashboard() {
  return (
    <section className="container my-5">
      <h2 className="mb-4">Admin Dashboard</h2>
      <p>Add, update or delete projects, update bio, and preview resume.</p>

      <div className="card p-4 shadow-sm">
        <h4>Add New Project</h4>
        <form>
          <input className="form-control my-2" placeholder="Project Title" />
          <textarea className="form-control my-2" placeholder="Project Description"></textarea>
          <input className="form-control my-2" placeholder="Tech Used" />
          <input className="form-control my-2" placeholder="Project Link" />
          <button className="btn btn-success">Save Project</button>
        </form>
      </div>
    </section>
  );
}
