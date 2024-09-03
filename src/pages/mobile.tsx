import React, { useEffect, useState } from "react";
import { Card, Spin } from "antd";

const { Meta } = Card;

interface Product {
  _id: string;
  category: string;
  name: string;
  slug: string;
  size: string;
  color: string;
  price: number;
  currency: string;
  availableQty: number;
  createdAt: string;
  updatedAt: string;
}

const Laptop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://buyhere-server.vercel.app/api/v1/product"
        );
        const data = await response.json();
        const laptops = data.products.filter(
          (product: Product) => product.category === "Mobile"
        );
        setProducts(laptops);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {loading ? (
        <Spin size="large" />
      ) : (
        products.map((product) => (
          <Card
            key={product._id}
            hoverable
            style={{ margin: 20, width: 240 }}
            cover={
              <img
                alt={product.name}
                src="https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Purple-6116.jpg"
              />
            }
          >
            <Meta
              title={product.name}
              description={`${product.currency}${product.price}`}
            />
          </Card>
        ))
      )}
    </div>
  );
};

export default Laptop;
