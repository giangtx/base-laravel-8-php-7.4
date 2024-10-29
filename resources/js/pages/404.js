import React from "react";

const NotFound = () => {
  console.log('Hello from 404.js');
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">404</div>

            <div className="card-body">I'm the 404 page!</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NotFound;