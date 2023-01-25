import React from 'react';
import { Icon, Rating } from "semantic-ui-react";

function Carts(){
    return (
      <div
      className="w-80 border rounded-xl shadow-lg mb-10 p-4"
      style={{ backgroundColor: "white" , margin:'0.8em'}}
    >
      <div style={{width:'17rem'}} className="w-56 h-56 mx-auto mb-5">
        <img
          className="object-contain"
          alt="product" 
          src="http://13.233.192.15/media/productImage/tech%40rentomed.com(28)/Portable%20incubator%20G95/Portable_incubator_G95.png"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
  
      <p className="PoppinsMedium text-sweetblack text-lg font-bold">
      Gear Oxymax 6 Layer Reusable Outdoor Face Mask Pack Of 2
      </p>
  
      <div className="flex items-center mb-2">
        <p style={{margin:'0px 13px 3px 0px'}} className="RalewayExtraLight text-sm ">
          item of packing 1
        </p>
        <Rating
          style={{ fontSize: 10, marginRight: 5 }}
          icon="star"
          maxRating={5}
          rating={4}
        />
        <p className="text-xs font-bold">4 ratings</p>
      </div>
  
      <div className="flex items-center mb-2">
        <p className="">
          <strike className="PoppinsLight text-gray-500 mr-3">$96</strike>
        </p>
        <p className="mr-2 PoppinsMedium font-bold">$69</p>
        <button className="ml-2 py-1 px-2 mb-3 text-xs rounded-lg text-black bg-lightblue">
          Best Seller
        </button>
      </div>
  
      <div className="flex items-center">
      <div style={{margin:"0px"}}  className="buyNow">
        <button className="btn">Buy Now</button>
    </div>
  
        <div style={{marginTop:'11px'}} className="bg-gray-300 p-1 text-xl text-blue-brand rounded-lg cursor-pointer">
          <Icon style={{ marginLeft: 3 }} name="heart outline" />
        </div>
  
        <div className="">
          <p style={{fontSize:'10px', margin:'11px 0px 0px 9px'}} className="text-red-500 RalewayExtraLight cursor-pointer">
            Add to Cart
          </p>
        </div>
      </div>
    </div>
    
    )
  }

export default Carts
