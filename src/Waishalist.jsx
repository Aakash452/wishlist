import React, { useRef } from "react";
import "./AddToCart.css";
import { Icon, Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import image from "./images/Rento/masks.png";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";

const Waishlist = () => {
  const topbrandsRef = useRef();
  const sellingbrandsRef = useRef();
  const scrollItems = async (value = 0, ref) => {
    ref.current.scroll({
      top: 0,
      left: ref.current.scrollLeft + value,
      behavior: "smooth",
    });

    ref.current.displayBackSlider = ref.current.scrollLeft + value > 0;
    ref.current.displayFrontSlider = !(
      ref.current.scrollLeft + value >=
      ref.current.scrollLeftMax
    );
  };
  
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

  function ShoppingCart() {
    function CardsFooter({total}) {
    return (
      <div
        style={{ display:'grid' , gridTemplateColumns:'9fr 4fr' ,  padding:'30px'}}
        className="CardsFooter"
      >
        <div style={{flex:'0.75' , flex: '0.75 1 0%',
      display: 'flex',
      alignItems: 'center',
      justifyContent:" center"}}>
      <span style={{color:'#1a3783' , fontSize:'22px'}}>Continue Shopping</span>
          
        </div>
        <div style={{flex:0.25}} className="subtotal">
        <div style={{    margin: '1px 1px 0px 79px'}} className="subtotalFinal">
        Subtotal (1 items): <span style={{ fontWeight: "bold" }}> {total}</span>
          
        </div>
        <button style={{fontWeight:'bold' , padding:'10px 30px' ,    marginLeft:' 72px' }} class="btn">Proceed to Buy</button>
          
        </div>
      </div>
    );
  }
  
    
    const data =[
      {
        product:'Gear Oxymax 6 Layer Reusable Outdoor Face Mask Pack Of 2',
        price:'400.00',
        subtotal:'400.00',
        image:image
      },
      {
        product:'Gear Oxymax 6 Layer Reusable Outdoor Face Mask Pack Of 2',
        price:'400.00',
        subtotal:'400.00',
        image:image
      },
      {
        product:'Gear Oxymax 6 Layer Reusable Outdoor Face Mask Pack Of 2',
        price:'400.00',
        subtotal:'400.00',
        image:image
      }
    
    ] 
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
              <div style={{backgroundColor:'white' , margin:'0px', padding:'0px'}} className="button">
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
                        fontFamily:"'Poppins','sans-serif'"
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
            <div  className="price flex"><div style={{fontFamily:'sans-serif'}}>₹</div> {props.price * count}.00</div>
            <div className="savings">
              <span style={{ color: "#1A3783", fontSize: "13px" , fontFamily:"'Poppins','sans-serif" }}>
                Total Savings.
              </span>{" "}
              <span
                style={{ color: "#1A3783", fontSize: "13px", marginLeft: "25px"}}
              >
                {" "}
                20.00
              </span>
            </div>
            <div className="subtotal">
              Subtotal (1 items):{" "}
              <span style={{ fontWeight: "bold" }}>{props.subtotal}</span>
            </div>
           
          </div>
        </div>
          
          
        </div>
        <hr width="100%" className="divide-y" />
      </div>
    );
  }
  
    
    return (
      <div  className="ShoppingCart">
      <div className="header">
      <h1 style={{fontSize:'25px' , fontWeight:'bold' ,  color: '#383431'}}>Shoppping Cart</h1>
       <h4 style={{color:'#144DD8' , marginTop:'10px'}}>{data.length} Items in Cart</h4>
       
      </div>
      <hr width="100%" className="divide-y"/>
      {data.map(Sdata=>(
        <Cards product={Sdata.product} price={Sdata.price} subtotal={Sdata.subtotal} image={Sdata.image}/>
      ))}
      
      
      <CardsFooter total={2000}/>
      
       
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#F7FEFC" }} className="mainDiv">
  
      <ShoppingCart/>

      {/* Most Selling Product */}
      <div className="mspSlide">
        <p className="titleContainer mx-20 mb-10  text-sweetblack text-lg sm:text-2xl">
          Most Selling Products
        </p>
        <section
          className="sellingContainer overflow-x-scroll scrollbar-none flex items-center justify-between py-5"
          ref={sellingbrandsRef} style={{overflow:"hidden"}}
        >
          <Carts />
          <Carts />
          <Carts />
          

          {topbrandsRef.current?.displayFrontSlider !== false && (
            <div
              onClick={() => scrollItems(200, sellingbrandsRef)}
              className="absolute bg-white right-16 p-2 rounded-full shadow-lg cursor-pointer"
            >
              <Icon
                name="chevron right"
                style={{
                  fontSize: 20,
                  marginLeft: 4,
                  fontWeight: 100,
                  color: "grey",
                }}
              />
            </div>
          )}

          {topbrandsRef.current?.displayBackSlider !== false && (
            <div
              onClick={() => scrollItems(-100, sellingbrandsRef)}
              className="absolute bg-white rounded-full left-16 p-2 shadow-lg cursor-pointer"
            >
              <Icon
                name="chevron left"
                style={{
                  fontSize: 20,
                  marginLeft: 4,
                  fontWeight: 100,
                  color: "grey",
                }}
              />
            </div>
          )}
        </section>
      </div>

      {/* Most Viewed Product */}
      <div className="mvpSlide">
        <section>
          <p className="titleContainer mx-20 mb-10 text-sweetblack text-lg sm:text-2xl">
            Most Viewed Products
          </p>

          <section
            className="container bg-white rounded-lg  border-2 border-gray-300 flex items-center overflow-x-scroll scrollbar-none  py-5 sm:py-12"
            ref={topbrandsRef} style={{overflow:"hidden"}}
          >
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(32)/Coda%20Inline%20Filter/CODA_INLINE_FILTERS.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Coda Inline Filter
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(31)/Gas%20Line%20Filter/GAS_LINE_FILTER.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Gas Line Filter
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(30)/Pippets/Pippets.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">Pippets</p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(29)/Warming%20Plate%20T45%20%26%20T%2047/Warming_plates.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Warming Plate T45 &amp; T 47
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(32)/Coda%20Inline%20Filter/CODA_INLINE_FILTERS.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Portable incubator G95
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(27)/CO2/O2%20Humidifier/CO2_O2_Humidifier.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                CO2/O2 Humidifier
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(26)/Cryocans/Cryocan.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">Cryocans</p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(25)/Laser%20System/Saturn.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Laser System
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(24)/Anti%20Vibration%20Table/Anti_vibration.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Anti Vibration Table
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(23)/Benchtop%20incubator/Benchtop_incubator.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Benchtop incubator
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(22)/CO2%20incubator/co2_incubator.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                CO2 incubator
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(21)/Embryology%20Workstation/Embryology_Workstation.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Embryology Workstation
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(20)/Oocyte%20Aspiration%20Pump/Oocyte_Aspiration_Pump.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Oocyte Aspiration Pump
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(19)/Bactrological%20Incubator/Bactrological_Incubator.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Bactrological Incubator
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(18)/Sperm%20Counting%20Chember/Chember.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Sperm Counting Chember
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(17)/Tube%20warmer/Tube_warmer.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Tube warmer
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(16)/Andrology%20Workstation/Andrology_Workstation.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Andrology Workstation
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(15)/Spermfuge%20Centrifuge/Spermfuge_Centrifuge.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Spermfuge Centrifuge
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(14)/Binocular%20Microscope/Binocular_Microscope.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Binocular Microscope
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(12)/Dry%20Fogger/Fogger_Machine.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Dry Fogger
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(11)/Eirox%205%20Ltr/Eirox5.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Eirox 5 Ltr
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(10)/Eirox%201Ltr/Eirox1.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Eirox 1Ltr
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(9)/Floorox%205%20Ltr/Floorox5.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Floorox 5 Ltr
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(8)/Floorox%201%20Ltr/Floorox1.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Floorox 1 Ltr
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(7)/Hand%20Rub%2B%20500ml/Sanitiser_500ml.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Hand Rub+ 500ml
              </p>
            </div>
            <div className="text-center mx-2 sm:mx-5">
              <div
                className="rounded-lg p-2 sm:p-5 w-28 sm:w-48 cursor-pointer"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <img
                  src="http://13.233.192.15/media/productImage/tech%40rentomed.com(6)/Hand%20Rub%2B%201000ml/Sanitiser_5Ltr.png"
                  alt="rentome products"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                  }}
                />
              </div>
              <p className="PoppinsMedium text-xs sm:text-xl mt-3">
                Hand Rub+ 5Ltr
              </p>
            </div>

            {topbrandsRef.current?.displayFrontSlider !== false && (
              <div
                onClick={() => scrollItems(200, topbrandsRef)}
                className="absolute bg-white right-5 p-2 rounded-full shadow-lg cursor-pointer"
              >
                <Icon
                  name="chevron right"
                  style={{
                    fontSize: 20,
                    marginLeft: 4,
                    fontWeight: 100,
                    color: "grey",
                  }}
                />
              </div>
            )}

            {topbrandsRef.current?.displayBackSlider !== false && (
              <div
                onClick={() => scrollItems(-100, topbrandsRef)}
                className="absolute bg-white rounded-full left-5 p-2 shadow-lg cursor-pointer"
              >
                <Icon
                  name="chevron left"
                  style={{
                    fontSize: 20,
                    marginLeft: 4,
                    fontWeight: 100,
                    color: "grey",
                  }}
                />
              </div>
            )}
          </section>
        </section>
      </div>
    </div>
  );
};

export default Waishlist;
