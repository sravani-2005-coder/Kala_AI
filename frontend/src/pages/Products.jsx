import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Products</h1>
      <p className="mb-8">
        Explore handloom and handicraft products created by skilled artisans.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;