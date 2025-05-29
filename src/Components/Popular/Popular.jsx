import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/popularproducts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPopularProducts(data))
      .catch((error) => {
        console.error("Error fetching popularproducts:", error);
      });
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR PRODUCTS</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          const updatedImage = item.image.replace(
            "http://localhost:4000",
            process.env.REACT_APP_API_URL
          );
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={updatedImage}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;