import React from "react";

export default function About() {
  return (
    <section className="container my-5 justify-content-center" id="about">

      {/* <h2 className="text-center mb-4">About Me</h2>
      <p>
        I'm James, a frontend web developer with a background in the Nigerian Navy and a passion for solving problems through code.
        I've spent the last few years honing my skills in HTML, CSS, JavaScript, React, Git, GitHub, jQuery, Node.js, and more.
        I believe in lifelong learning, clean code, and design that speaks.
      </p>

      <h4 className="mt-4">Skills</h4>
      <div className="row">
        {["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "GitHub", "Bootstrap", "jQuery", "CLI"].map(skill => (
          <div className="col-6 col-md-3 mb-2" key={skill}>
            <span className="badge bg-dark w-100 py-2">{skill}</span>
          </div>
        ))}
      </div>
      <br />

      <hr /> */}

            <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
              <h2 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Me</h2>
              <p class="lead aboutfont">I'm James, a frontend web developer with a background in the Nigerian Navy and a passion for solving problems through code.
        I've spent the last few years honing my skills in HTML, CSS, JavaScript, React, Git, GitHub, jQuery, Node.js, and more.
        I believe in lifelong learning, clean code, and design that speaks.</p>
              
              
              {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
              </div> */}

              
            </div>
          </div>
        </div>

        
        <h4 className="mt-4 justify-content-center">Skills</h4>
      <div className="row">
        {["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "GitHub", "Bootstrap", "jQuery", "CLI"].map(skill => (
          <div className="col-6 col-md-3 mb-2" key={skill}>
            <span className="badge bg-dark w-100 py-2">{skill}</span>
          </div>
        ))}
      </div>
        
        <br />
        <br />
        <hr />

            
    </section>
  );
}
