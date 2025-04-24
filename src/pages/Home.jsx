import React from "react";

export default function Home() {
  return (
    <section className="container my-5">
      {/* <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">Hi, I'm James</h1>
          <p className="lead">
            A passionate frontend developer skilled in building elegant, responsive, and functional web experiences.
          </p>
          <a href="#contact" className="btn btn-primary">Let’s Work Together</a>
        </div>
        <div className="col-md-6">
          <img src="/profile.jpg" className="img-fluid rounded" alt="James profile" />
        </div>
        
      </div>
      <br />
      <hr /> */}

      


      <div >
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg mainh">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">I'm James Eghievha</h1>
        <p class="lead"> A passionate frontend developer skilled in building elegant, responsive, and functional web experiences.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <a href="/contact" className="btn btn-primary">Let’s Work Together</a>
         
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="/profile.jpg" alt="James profile" width="100%" />
      </div>
    </div>
  </div>


        <br />
        <br />
        <hr />

    </section>
  );
}
