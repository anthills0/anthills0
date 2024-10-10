import React from 'react';

const Content = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
  }}>
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Anthills Zero</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#">Home</a>
            <a class="nav-link" href="#">Portfolio</a>
            <a class="nav-link" href="#">About Us</a>
          </nav>
        </div>
      </header>

      <main role="main" class="inner cover">
        <h1 class="cover-heading">Site Under Construction.</h1>
        <p class="lead">We will be going live soon.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-success">Contact</a>
        </p>
      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
          <small>2024 Anthills Zero. All Rights Reserved.</small>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Content;
