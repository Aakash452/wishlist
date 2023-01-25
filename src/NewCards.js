import React from "react";
import image from "./images/Rento/masks.png";
import DeleteIcon from "@material-ui/icons/Delete";
import "./newcard.css";

function NewCards() {
  return (
    <div>
      <div
        style={{
          // display: "flex",
          // flexDirection: "row",
          padding: "20px",
          border: "2px solid white",
          gridTemplateColumns:'1fr 4fr'
        }}
        className="card"
      >
        <div className="imageSection">
          <img
            style={{ border: "1px solid white" ,     height:' 9em', width: '10em ' , marginLeft:'20px'}}
            src={image}
            alt="myImage"
            class="img-thumbnail"
          />
        </div>
        <div style={{margin:'19px 0px 0px 0px' , gridTemplateColumns:'3fr 1fr'}} className="bodypart">
        <div  className="details">
                <div className="title">
                Gear Oxymax 6 Layer Reusable Outdoor Face Mask Pack Of 2
                </div>
                <div style={{}} className="stockDetais">
                <div style={{display:'grid' , gridTemplateColumns:'4fr 2fr 7fr'}} className="InStock">
                <div style={{color:'#144DD8'}} className="stock">
                        In Stock
                    </div>
                    <div className="price1" style={{margin:'-5px 0px 0px 0px' , fontFamily:'sans-serif' , fontSize:'24px', color:'#ff8080' , fontWeight:'bold'}}>₹ 400.00</div>
                    <div style={{textDecoration:'line-through',fontSize:'19px', color:"#9d9d9d" , fontFamily:'sans-serif' , margin:'0px 0px 10px 2px'}} className="price2">₹ 400.00</div>
                </div>
                <div style={{margin:'0px 0px 0px -6px'}} className="delete">
              <a className="deleteCard" href="#" style={{ color: "#9d9d9d" , margin:'0px'}}>
                <DeleteIcon />
                <span>Remove</span>
              </a>
            </div>
                   
                    
                    
                </div>
          </div>
          <div
            style={{ padding: " 0px 32px 0px 50px" }}
            className="card-pricing newPricing"
          >
            <div  className="addToCart">
              <button style={{padding:'12px 24px'}}  className="btn">Add to Cart</button>
          </div>
          </div>
        </div>
      </div>
      <hr width="100%" className="divide-y" />
    </div>
  );
}

export default NewCards;
{
  /* <div style={{display:'flex'}} className="bodyPart">
          
          
      </div> */
}
