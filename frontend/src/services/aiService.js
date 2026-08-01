import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/ai`;

export const generateProductDescription = async (productData) => {
  const response = await axios.post(
    `${API}/product-description`,
    productData
  );

  return response.data;
};