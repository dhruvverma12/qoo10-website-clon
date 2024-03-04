import React from "react";
import image1 from "../assets/BestSellerImages/image1.jpg";
import image2 from "../assets/BestSellerImages/image2.jpg";
import image3 from "../assets/BestSellerImages/image3.jpg";
import image4 from "../assets/BestSellerImages/image4.jpg";
import "../styles/BestSellers.css"; // Import your CSS file

const BestSellers = () => {
  const products = [
    { id: 1, name: "[Bundle of 3]Old Town White Coffee 3 In 1 Instant Pre-Mix White Coffee 13s / Nan Yang white coffee 20s", price: "$49.99", image: image1 },
    { id: 2, name: "Yuri-matic Antibacterial Laundry Liquid 2.8Kg Twinpack+Free Yuri Disinfectant Spray 50ml", price: "$39.99", image: image2 },
    { id: 3, name: "Gross 1kg XL Vannamei Prawn Meat PD / Seafood", price: "$129.99", image: image3 },
    { id: 4, name: "[LaoBanNiang] 1KG Raw Jumbo Almonds from USA", price: "$34.99", image: image4 },
    // Add more products as needed
  ];

  return (
    <div className="best-sellers-container">
      <div className="top-div">
        <div className="left-div">
          <h2>Bestsellers</h2>
        </div>
        <div className="right-div">
          <p>All |</p><p> Fashion |</p><p> Beauty |</p><p> Men-Sports |</p><p> Digital |</p><p> Home |</p><p> Food Dining |</p><p>
            Baby Kids |</p><p> Voucher</p>
          
        </div>
      </div>
      <div className="bottom-div">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="top-product-div">
              <img src={product.image} alt={`Product ${product.id}`} />
            </div>
            <div className="bottom-product-div">
              <p>{product.name}</p>
              <h3>{product.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
