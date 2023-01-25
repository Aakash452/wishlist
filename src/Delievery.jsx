import React from "react";
import "./delievery.css";

function Delievery() {
  return (
    <div style={{ backgroundColor: "#F7FEFC" }} className="p-10 ">
      <div
        style={{ width: "62vw" , margin:'4.5rem'}}
        className="address bg-white p-4 rounded-lg"
      >
        <div
          style={{ fontSize: "24px", margin: "20px 34px" }}
          className="title font-bold"
        >
          Delivery Address
        </div>
        <div className="form" style={{ display: "flex" }}>
          <form action="#" type="submit">
            <div className="flatnumber ">
              <textarea
                style={{ height: "7em" , padding:'10px 15px' }}
                className="addressWidth"
                name="flatNumber"
                id="flatNumber"
                placeholder="Flat Number, Building Name, Street/Locality"
              ></textarea>
            </div>
            <div className="pincode  ">
              <input
                className="addressWidth"
                type="text"
                name="pincode"
                id="pincode"
                placeholder="Pincode"
              />
            </div>
            <div className="landmark  ">
              <input
                className="addressWidth"
                type="text"
                name="landmark"
                id="landmark"
                placeholder="Landmark Optional"
              />
            </div>
            <div className="city">
              <input
                className="addressWidth"
                type="text"
                name="city"
                id="city"
                placeholder="City"
              />
            </div>
            <div className="state  ">
              <input
                className="addressWidth"
                type="text"
                name="state"
                id="state"
                placeholder="State"
              />
            </div>
            <div className="number">
              <input
                className="addressWidth"
                type="number"
                name="mobnumber"
                id="mobnumber"
                style={{color:'#38343152'}}
                placeholder="10 Digit Mobile Number"
              />
            </div>
            <div className="name">
              <input
                className="addressWidth"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div style={{margin:'0px 20px', padding:"20px" ,fontSize: '12px',
    fontWeight: 'bold'}} className="radioButton">
              
              
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="personal"
              />
              
              <span className="ml-2 mr-2">Home</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
              style={{color:'#38343152'}}
                type="radio"
                className="form-radio"
                name="accountType"
                value="busines"
              />
              <span className="ml-2 mr-2">Office</span>
            </label>
            <label className="inline-flex items-center ml-6 ">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="busines"
              />
              <span className="ml-2 mr-2">Other</span>
            </label>
            </div>
            <div style={{float:'right'}} className="flex End" >
            <a style={{margin:'27px' , fontWeight:'550' , fontSize:'18px'}} className="end"  href="#">Cancel</a>
              <button className="button" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Delievery;
