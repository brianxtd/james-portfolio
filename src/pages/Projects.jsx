import React from "react";

const projectList = [
  {
    title: "Navy Fleet Tracker",
    desc: "A React-based tool to manage and visualize Navy fleet data.",
    tech: "React, Bootstrap, Firebase",
    link: "#"
  },
  {
    title: "Triada Mobile",
    desc: "A feature and promotion web for Triada mobile new release. a new mobile release.",
    tech: "HTML, CSS, JS, jQuery",
    link: "https://brianxtd.github.io/Triada-mobile/"
  },
  {
    title: "Photography Booking App",
    desc: "A mock booking system for I-Radiance Photography clients.",
    tech: "HTML, CSS, JS",
    link: "#"
  },
];

export default function Projects() {
  return (
    <section className="container my-5" id="projects">
      <h2 className="text-center mb-4">Projects</h2>

      <br />
      <br />

      <div className="row">
        {projectList.map((proj, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{proj.title}</h5>
                <p className="card-text">{proj.desc}</p>
                <p><strong>Tech:</strong> {proj.tech}</p>
                <a href={proj.link} className="btn btn-sm btn-outline-primary">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>

        <br />
        <br />
        <hr />

    </section>
  );
}
