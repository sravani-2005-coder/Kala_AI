import axios from "axios";

const API = "http://localhost:5000/api/ai";

export const generateProductDescription = async (productData) => {
  const response = await axios.post(
    `${API}/product-description`,
    productData
  );

  return response.data;
};