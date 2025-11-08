import React, { useEffect, useState } from "react";

const useOrigin = () => {
  const [origins, setOrigins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/origins")
      .then((res) => res.json())
      .then((data) => setOrigins(data))
      .catch((err) => console.log(err));
  }, []);

  return origins;
};

export default useOrigin;
