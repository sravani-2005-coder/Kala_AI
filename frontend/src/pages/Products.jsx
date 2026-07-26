import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Card from "../components/Card";
import Loader from "../components/ui/Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Unable to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-4">
        Products
      </h1>

      <p className="mb-8">
        Explore handloom and handicraft products created by skilled artisans.
      </p>

      {loading ? (

<div className="flex justify-center py-20">

<Loader />

</div>

) : products.length === 0 ? (

<p className="text-center text-gray-500">

No Products Found

</p>

) : (

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{products.map((product)=>(

<Card
key={product._id}
product={product}
/>

))}

</div>

)}
    </div>
  );
}

export default Products;