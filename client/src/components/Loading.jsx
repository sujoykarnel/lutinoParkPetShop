import React from "react";
import { RevolvingDot } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
