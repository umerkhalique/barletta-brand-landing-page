import React from 'react';
import ReactDOM from 'react-dom';
import './Sliderroot.css';
import Sliderdisplay from './Sliderdisplay';


function Sliderroot() {
    return (
        <div>
            <div className="zzxy d-flex justify-content-center">
                <Sliderdisplay/>
                <Sliderdisplay/>
                <Sliderdisplay/>
                <Sliderdisplay/>
            </div>
            <div className="zxy d-flex justify-content-center">
                <Sliderdisplay/>
                <Sliderdisplay/>
                <Sliderdisplay/>
                <Sliderdisplay/>
            </div>
        </div>
        )
  }
  
  export default Sliderroot;
