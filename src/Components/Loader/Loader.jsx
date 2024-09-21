import React from 'react'
import {CircleLoader} from 'react-spinners'

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <CircleLoader />
    </div>
  );
}

export default Loader