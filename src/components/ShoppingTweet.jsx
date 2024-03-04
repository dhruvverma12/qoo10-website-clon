// import React from 'react'

// const ShoppingTweet = () => {
//   return (
//     <div>ShoppingTweet</div>
//   )
// }

// export default ShoppingTweet


import React from "react";
import image1 from "../assets/ProductImages/image1.jpg";
import image2 from "../assets/ProductImages/image2.jpg";
import image3 from "../assets/ProductImages/image3.jpg";
import image4 from "../assets/ProductImages/image4.jpg";
import image5 from "../assets/ProductImages/image5.jpg";
import image6 from "../assets/ProductImages/image6.jpg";
import image7 from "../assets/ProductImages/image7.jpg";
import image8 from "../assets/ProductImages/image8.jpg";
import image9 from "../assets/ProductImages/image9.jpg";
import image10 from "../assets/ProductImages/image10.jpg";
import image11 from "../assets/ProductImages/image11.jpg";
import image12 from "../assets/ProductImages/image12.jpg";
import image13 from "../assets/ProductImages/image13.jpg";
import image14 from "../assets/ProductImages/image14.jpg";

import "../styles/ShoppingTweet.css"; // Import your CSS file

const ShoppingTweet = () => {
  const products = [
    { id: 1, name: "Sunflower Dream Dress", price: "$39.99", image: image1 },
    { id: 2, name: "Midnight Sparkle Jumpsuit", price: "$49.99", image: image2 },
    { id: 3, name: "Cherry Blossom Skater Skirt Set", price: "$34.99", image: image3 },
    { id: 4, name: "Ocean Breeze Romper", price: "$29.99", image: image4 },
    { id: 5, name: "Vintage Rose Maxi Dress", price: "$54.99", image: image5 },
    { id: 6, name: "Peachy Keen Crop Top and Shorts", price: "$24.99", image: image6 },
    { id: 7, name: "Moonlit Lace Party Dress", price: "$59.99", image: image7 },
    { id: 8, name: "Boho Chic Fringe Kimono", price: "$44.99", image: image8 },
    { id: 9, name: "Tropical Paradise Playsuit", price: "$37.99", image: image9 },
    { id: 10, name: "Starry Night Velvet Jumpsuit", price: "$47.99", image: image10 },
    { id: 11, name: "Daisy Delight Off-Shoulder Top", price: "$19.99", image: image11 },
    { id: 12, name: "Rustic Floral Midi Skirt", price: "$32.99", image: image12 },
    { id: 13, name: "Urban Streetwear Hoodie Dress", price: "$42.99", image: image13 },
    { id: 14, name: "Electric Blue Active Leggings Set", price: "$27.99", image: image14 },
    // Add more products as needed
  ];

  return (
    <div className="shopping-container">
      <div className="shopping-bottom-div">
        {products.map((product) => (
          <div className="shopping-product" key={product.id}>
            <div className="shopping-top-product-div">
              <img src={product.image} alt={`Product ${product.id}`} />
            </div>
            <div className="shopping-bottom-product-div">
              <p>{product.name}</p>
              <h3>{product.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingTweet;
