import React from "react";

export default function Nav() {
  return (
    <section>
     

     <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">My Portfolio</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="/#projects" class="nav-link">Projects</a></li>
        <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
        <li class="nav-item"><a href="/#SocialMedia" class="nav-link">Follow Me</a></li>
        <li class="nav-item"><a href="/admin" class="nav-link">Dashboard</a></li>
        
      </ul>
    </header>
  </div>




    </section>
  );
}
