import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Hero from "../components/Hero";
import Card from "../components/Card";
import Loader from "../components/ui/Loader";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        setProducts(res.data.slice(0, 3));
      } catch (error) {
        console.error(error);
        toast.error("Failed to load featured products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />

      <section className="py-10 px-6">

<h2 className="text-3xl font-bold text-center mb-8">
Featured Products
</h2>

{loading ? (

<div className="flex justify-center py-12">
<Loader />
</div>

) : products.length === 0 ? (

<p className="text-center text-gray-500">
No products available.
</p>

) : (

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{products.map((product) => (

<Card
key={product._id}
product={product}
/>

))}

</div>

)}

</section>
    </>
  );
}

export default Home;