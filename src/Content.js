import React from "react";
import ReactDOM from "react-dom";
import brand_barletta from "./brand_barletta.png";
import barletta_logo_new from "./barletta-logo-new.png";

function Content() {
  return (
    <div>
      <img className="img2 container-fluid" src={brand_barletta} />

      <div className="container my-5">
        <div className="text-center w-lg-75 mx-auto ">
          <a href="/">
            <img src={barletta_logo_new} className="img-fluid img3"></img>
          </a>

          <p className="mt-5 ppp">
            We're Maine's dealer for this premium pontoon brand. Proudly
            manufacturing the luxurious Barletta Pontoon Boat Lusso, the all new
            sporty Corsa and the well appointed Cabrio there really is no wrong
            answer no matter your choice. All Barlettas share the common threads
            of quality, convenience, comfort, and performance - at different
            price points. And if you’re looking for something a little
            “different”, you’ve got to check out the Barletta Slide-Toon, our
            expanding pontoon boat.
          </p>
          <hr className="hrtag"></hr>
          <div className="container-fluid">
            <h5 class="text-uppercase text-center font-weight-bold mb-5">
              Inventory
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
