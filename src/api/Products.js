import React, { useEffect, useState } from "react";

const Products = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const API = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setApiData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    API();
  }, []);

  return (
    <>
      {apiData.map((element) => (
        <ul key={element.id}>
          <li>{element.title}</li>
        </ul>
      ))}
    </>
  );
};

export default Products;
