import React from "react";
import Loader from "react-loader-spinner";
const Spinner = () => {
  return (
    <div className="Spinner">
      <Loader type="ThreeDots" color="#00BFFF" height="50" width="50" />
    </div>
  );
};

export default Spinner;
