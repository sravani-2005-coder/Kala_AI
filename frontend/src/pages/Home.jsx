import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data.slice(0, 3)); // Show only the first 3 products
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Hero />

      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;