import React from "react";
import './select.css'

function SelectDelivery() {
  return (
    <div style={{ backgroundColor: "#F7FEFC" , flexDirection:'column'}} className="p-10 flex">
      <div style={{margin:'49px 9px 11px 130px', fontSize:'23px' , fontFamily:"'Poppins','sans-serif" , fontWeight:'800' }} className="Title">Select a delivery address</div>
      <div
        style={{ width: "45.5vw", margin: "52px 9px 11px 130px" , border:'1px solid rgb(192 191 191)'}}
        className="mainThing shadow bg-white p-4 rounded-lg"
      >
        <div
          style={{
            margin: "0px 20px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
          className="radioButton"
        ></div>
        <div className="Address">
        <label style={{margin:'0px'}} className="inline-flex items-center ml-2">
          <input
            type="radio"
            className="form-radio"
            name="accountType"
            value="personal"
          />
          <span style={{fontSize:'12px' , margin:'0px', fontWeight:'bolder'}} className="ml-2 mr-2">Home</span>
        </label>
        <div style={{margin:'-3px 26px'}} className="enterAddress">
        <div style={{fontSize:'11.5px'}} className="name">
            Akshay Patil
        </div>
        <div style={{color:'#383431'}} className="homeAddress">
        Ap kodoli

Bugale Galli kodoli

KOLHAPUR, MAHARASHTRA 416114

India
        </div>
        </div>
        
        <div className="confirmation flex">
            <button style={{float:'none' ,fontWeight:'normal',     fontSize:' 16px',
    padding: "15px 54px", margin:'1px 34px 11px 21px'}} className="button ContinueWithAddress" >
            Continue with this address
            </button>
            <div className="editDelete">
            <div className="btn buttn">Edit</div>
            <div className="btn buttn">Delete</div>
            </div>
            
        </div>
        </div>
        
      </div>
      <div className="btn AddNewAddress" style={{padding:'10px 0px',width:'45.5vw',marginTop:'25px', marginLeft:'130px', background:"none" ,color:"#144DD8",border:" 1px solid #144DD8", fontSize:"14px"}}>
      + Add New Address
      </div>
    </div>
  );
}

export default SelectDelivery;
