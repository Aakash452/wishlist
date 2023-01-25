import React, { useRef } from "react";
import "./AddToCart.css";
import { Icon, Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import image from "./images/Rento/masks.png";
import DeleteIcon from "@material-ui/icons/Delete";
import Carts from "./Carts";

const AddToCart = () => {
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
  function Wishlist() {
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
          <p style={{marginBottom:'6px'}} className="PoppinsMedium text-sweetblack text-lg font-bold title">
      Gear Oxymax 6 Layer Reusable Outdoor Face Mask Pack Of 2
      </p>
                  <div style={{}} className="stockDetais">
                  <div style={{display:'flex'}} className="InStock">
                  <div style={{color:'#144DD8'}} className="stock">
                          In Stock
                      </div>
                      <div className="priceStock flex">
                      <div className="price1 flex" style={{margin:'0px 0px 1px 79px' , fontSize:'24px', color:'#ff8080' , fontWeight:'bold'}}><div style={{fontFamily:'sans-serif'}}>₹</div> <span style={{fontFamily:"'Poppins',sans-serif'"}}>400.00</span></div>
                      <div style={{textDecoration:'line-through',fontSize:'19px', color:"#9d9d9d"   , margin:'0px 0px 10px 14px'}} className="price2 flex"><div style={{fontFamily:'sans-serif'}}>₹</div> <span style={{fontFamily:"'Poppins',sans-serif'"}}>400.00</span></div>
                      </div>
                    
                     
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
  //  footer
  function NewFooter() {
    return (
        <div>
        <hr/>
           <div style={{display:'flex'}} className="footer">
           <span className="footerContinue" style={{color:'#1a3783' , fontSize:'22px' , margin:'34px 34px 34px 94px'}}>Continue Shopping</span>
           </div>

        </div>
    )
}

  return (
    <div  className="ShoppingCart">
    <div className="header">
    <h1 style={{fontSize:'25px' , fontWeight:'bold' ,  color: '#383431' , margin:'18px 0px'}}>Wishlist</h1>
     <h4 style={{color:'#144DD8' , marginTop:'10px', fontSize:'16px'}}>2 Items in Wishlist</h4>
     
    </div>
    <hr width="100%" className="divide-y"/>
    <NewCards/>
    <NewCards/>
    <NewCards/>
   
 
    <NewFooter/>
    
     
    </div>
  );
}


  return (
    <div style={{ backgroundColor: "#F7FEFC" }} className="mainDiv">
      <Wishlist />
      

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
          <Carts />
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

export default AddToCart;
