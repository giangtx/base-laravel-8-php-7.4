import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
        <div className="card">
            <div className="card-header">Home</div>

            <div className="card-body">I'm the home page!</div>
            <div className="card-footer">
              <Link to="/example" className="btn btn-primary">Go to example</Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
};

export default Home;