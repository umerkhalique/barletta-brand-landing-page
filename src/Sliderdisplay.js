import React from "react";
import ReactDOM from "react-dom";
import "./Sliderdisplay.css";
import Slider from "./Slider";

function Sliderdisplay() {
  return (
    <div>
      <section className="root">
        <div className="imglist1">
          <div className="imgsldrroot">
            <div className="imgsldrdiv col-12 col-sm-6 col-md-4 col-lg-3 item_container">
              <Slider />
            </div>
          </div>
          <div className="text-center anc">
            <a className="anchor">2022 BARLETTA L23UC</a>
          </div>
        </div>
        <div class="item_list-detail">
          <div class="text-center">
            <h6 class="mb-2">2022 BARLETTA L23UC</h6>
            <p class="mb-2 classp">Type: Pontoon</p>
            <button class="btn bnt btn-link mb-2 inventory__detail--price-btn">
              Call for Price
            </button>
          </div>
          <div class="d-flex justify-content-center buttons-group">
            <button class="btn text-uppercase color-tarawera mr-2 circle-btn">
              View Details
            </button>
            <button class="btn text-uppercase color-outline-tarawera circle-btn">
              Inquire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sliderdisplay;
