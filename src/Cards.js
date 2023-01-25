import React from "react";
import image from "./images/Rento/masks.png";
import { Icon } from "semantic-ui-react";
import "./cards.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";

function Cards(props) {
  const [count, setCount] = useState(1);

  return (
    <div>
      <div
        style={{
          // display: "flex",
          // flexDirection: "row",
          padding: "20px",
          border: "2px solid white",
        }}
        className="card"
      >
        <div className="imageSection">
      <img style={{border:'1px solid white'}} src={image} alt="myImage" class="img-thumbnail"/>
      </div>
      <div className="bodypart">
      <div style={{ padding: "11px" }} className="card-body">
          <div style={{width:'75%'}} className="title">{props.product}</div>

          <div className="companyName">Rentomed Pvt Ltd.</div>
          <div className="size" style={{ color: "#383431" }}>
            Size: Pack of 1
          </div>
          <div
            style={{ display: "flex", flexDirection: "row" }}
            className="quantity"
          >
            <div style={{ marginTop: "22px" }} className="lable">
              Qty
            </div>
            <div className="button">
              <div className="custom-number-input h-10 w-32 counter">
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    onClick={() => {
                      if (count !== 1) {
                        setCount(count - 1);
                      }
                    }}
                    style={{ border: "1px solid rgb(213 207 207)" }}
                    data-action="decrement"
                    className="   hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span
                      style={{ color: "rgb(213 207 207)" }}
                      className="m-auto text-2xl font-thin"
                    >
                      −
                    </span>
                  </button>
                  <input
                    style={{
                      border: "1px solid rgb(213 207 207)",
                      color: "rgb(213 207 207)",
                    }}
                    type="number"
                    className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    name="custom-input-number"
                    value={count}
                  ></input>
                  <button
                    onClick={(e) => {
                      setCount(count + 1);
                    }}
                    style={{
                      border: "1px solid rgb(213 207 207)",
                      color: "rgb(213 207 207)",
                      fontFamily:'sans-serif'
                    }}
                    data-action="increment"
                    className="  hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="delete">
              <a className="deleteCard" href="#" style={{ color: "#9d9d9d" }}>
                <DeleteIcon />
                <span>Remove</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ padding: " 0px 32px 0px 50px" }} className="card-pricing">
          <div style={{fontFamily:'sans-serif'}} className="price">₹ {props.price * count}</div>
          <div className="savings">
            <span style={{ color: "#1A3783", fontSize: "13px" }}>
              Total Savings.
            </span>{" "}
            <span
              style={{ color: "#1A3783", fontSize: "13px", marginLeft: "25px" , fontFamily:'sans-serif' }}
            >
              {" "}
              20.00
            </span>
          </div>
          <div className="subtotal">
            Subtotal (1 items):{" "}
            <span style={{ fontWeight: "bold" , fontFamily:'sans-serif' }}>{props.subtotal}</span>
          </div>
         
        </div>
      </div>
        
        
      </div>
      <hr width="100%" className="divide-y" />
    </div>
  );
}

export default Cards;
