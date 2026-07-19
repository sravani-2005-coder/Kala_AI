import dotenv from "dotenv";

dotenv.config();

export const generateProductDescription = async (productData) => {

    const prompt = `
You are an expert e-commerce copywriter specializing in Indian handloom products.

Generate:

1. Product Description
2. Five Highlights
3. Instagram Caption
4. SEO Keywords

Product Name: ${productData.name}

Category: ${productData.category}

Material: ${productData.material}

Features: ${productData.features}
`;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        }
    );

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
        throw new Error(JSON.stringify(data));
    }

    return data.candidates[0].content.parts[0].text;
};