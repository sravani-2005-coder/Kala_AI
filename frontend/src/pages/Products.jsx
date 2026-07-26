import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Card from "../components/Card";
import Loader from "../components/ui/Loader";
import EmptyState from "../components/ui/EmptyState";
import { useCallback } from "react";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:5000/api/products");

      setProducts(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Unable to load products.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDeleteSuccess = (id) => {
    setProducts((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div className="px-4 md:px-8 py-8">

      <h1 className="text-4xl font-bold mb-4">
        Products
      </h1>

      <p className="mb-8 text-gray-600">
        Explore handloom and handicraft products created by skilled artisans.
      </p>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader />
        </div>
      ) : products.length === 0 ? (
        <EmptyState
          title="No Products Yet"
          message="There are no artisan products available right now."
          buttonText="Add Product"
          buttonLink="/add-product"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product._id}
              product={product}
              onDelete={handleDeleteSuccess}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Products;