import React from 'react'
import '../styles/RecommendedItems.css'
import { CiHeart } from "react-icons/ci";
import image1 from "../assets/recommendedItemsImage/image1.jpg"
import image2 from "../assets/recommendedItemsImage/image2.jpg"
import image3 from "../assets/recommendedItemsImage/image3.jpg"
import image4 from "../assets/recommendedItemsImage/image4.jpg"



const RecommendedItems = () => {
  return (
    <div className='main'>
        <div className="topper">
          <p>Recommended items</p>
          <button><CiHeart /> Wish List </button>
        </div>
        <div className="product-container">
          <div className='product'>
            <div className="top-div">
              <img src={image1} alt="" />
            </div>
            <div className="bottom-div">
              <p className='bottom-div-p'>asdddd</p>
              <CiHeart />
            </div>
          </div>
          <div className='product'>
            <div className="top-div">
              <img src={image2} alt="" />
            </div>
            <div className="bottom-div">
              <p>asdddd</p>
              <CiHeart />
            </div>
          </div>
          <div className='product'>
            <div className="top-div">
              <img src={image3} alt="" />
            </div>
            <div className="bottom-div">
              <p>asdddd</p>
              <CiHeart />
            </div>
          </div>
          <div className='product'>
            <div className="top-div">
              <img src={image4} alt="" />
            </div>
            <div className="bottom-div">
              <p>asdddd</p>
              <CiHeart />
            </div>
          </div>
        </div>
    </div>
  )
}

export default RecommendedItems