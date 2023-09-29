import React, { Suspense, lazy } from "react";
const Products = lazy(() => import("../api/Products"));

const Suspence = () => {
  return (
    <>
      <Suspense fallback={<h1>🌀 Loading...</h1>}>
        <Products />
      </Suspense>
    </>
  )
};

export default Suspence;
