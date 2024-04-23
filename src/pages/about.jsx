import React from 'react';

const AboutPage = () => {
  return (
    <div className="container text-center mt-5">
      <h2>About</h2>
      <p className="lead">
        This is a simple GitHub Repository Viewer application built with React.
      </p>
      <p className="lead">
        It allows users to search for repositories on GitHub and view the
        results.
      </p>
      <p className="lead">Created by Aleksandra Włoch</p>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
        alt="GitHub Icon"
        className="img-fluid mb-3"
        style={{ width: '180px', height: '100px' }}
      />
    </div>
  );
};

export default AboutPage;
