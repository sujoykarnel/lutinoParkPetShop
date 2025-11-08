import React, { useEffect, useState } from "react";

const useUom = () => {
  const [uoms, setUoms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/uoms")
      .then((res) => res.json())
      .then((data) => setUoms(data))
      .catch((err) => console.log(err));
  }, []);

  return uoms;
};

export default useUom;
