import React from 'react'
import './Footer.css';
import companyLogo from './footer_logo.png';

export default function Footer() {
    return (
        <div>
            
            <section class="main_footer">
				<div class="container ">
					<div class="row">
						<div class="col-lg-3 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
							<div class="footer_logo text-center">
                            <a href="/"><img src={companyLogo} /></a>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-4">
							<div class="footer_box text-center">
								<h5 class="fb_heading">SALES</h5>
								<ul class="footer_links">
									<li><a href="boats9394.html?condition=New">New Boats</a> </li>
									<li><a href="boats660c.html?condition=Used">Used Boats</a> </li>
									<li><a href="index6612.html?scroll_to=shop_brand">Shop By Brands</a> </li>
									<li><a href="rental.html">Boat Rentals</a> </li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-4">
							<div class="footer_box text-center">
								<h5 class="fb_heading">SERVICE</h5>
								<ul class="footer_links">
									<li><a href="service.html">Service</a> </li>
									<li><a href="parts.html">Parts</a> </li>
									<li><a href="winterization.html">Storage / Winterization</a> </li>
									<li><a href="digital_power_solution.html">Sell Your Boat</a> </li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-4 ">
							<div class="footer_box text-center">
								<h5 class="fb_heading">COMPANY</h5>
								<ul class="footer_links">
									<li><a href="contact.html">Locations</a> </li>
									<li><a href="seasonal_recration.html">Seasonal Recreation</a> </li>
									<li><a href="contact.html">Contact Us</a> </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>




            <section class="copyright_sec Roboto_Light">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="copy_right_box">
								<div class="left_col Montserrat_Medium">
									<ul>
										<li><a href="https://www.mdsbrand.com/">Powered by MDS Brand</a></li>
									</ul>
								</div>
								<div class="right_col Montserrat_Light">
									<ul>
										<li><a href="page/privacy_policy/index.html">Privacy &amp; Policy</a></li>
										<li><a href="javascript:void(0)"> Accessibility </a></li>
										<li><a href="javascript:void(0)">Copyright ©2021 Long Lake Marine</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>





        </div>
    )
}
