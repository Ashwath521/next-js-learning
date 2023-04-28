import React from "react";
import { useRouter } from "next/router";

function Review() {
  const route = useRouter();
  const { products, review } = route.query;
  return (
    <h1>
      products{products} & Review{review}
    </h1>
  );
}

export default Review;
