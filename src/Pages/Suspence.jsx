import React, { Suspense } from "react";
import Loading from "../Components/Loading";
const Products = React.lazy(() => import("../api/Products"));

const Suspence = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </>
  )
};

export default Suspence;
