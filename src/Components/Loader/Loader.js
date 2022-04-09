import React from "react";
import './Loader.css'

function Loader() {
  return (
    <>
      <div className="loader-body">
        <div className="loader-container">
          <div className="loader-inner-1"></div>
          <div className="loader-inner-2"></div>
          <div className="loader-inner-3"></div>
          <div className="loader-inner-4"></div>
        </div>
      </div>
    </>
  );
}

export default Loader;