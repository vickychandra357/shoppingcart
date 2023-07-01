import axios from 'axios';
import React, {useState, useEffect} from "react";
import useTitle from "../hooks/useTitle"
import ProductCard from "../components/ProductCard";

import "./Home.css"

const Home = () => {
  useTitle("Home");
  const [myProduct, setMyProduct] = useState([]);
  useEffect(()=>{
    axios.get("https://dummyjson.com/products")
      .then(response =>setMyProduct(response.data.products))
      .catch(e=>console.log(e));
  },[])

  return (
    <main>
      <h1>All Products</h1>
      <section className="products">
        {
          myProduct.map(product=>(
            <ProductCard key={product.id} product={product} />
          ))
        }
      </section>
    </main>
  )
}

export default Home