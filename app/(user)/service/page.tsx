"use client";
import { CardProductList } from "@/components/card/CardProductList";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products/";
const Service = () => {
  const [product, setProduct] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="h-screen flex flex-wrap justify-center gap-3">
      {product?.map((product: any) => (
        <CardProductList
        onClick={() =>  router.push(`/service/${product.id}`)}
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Service;
