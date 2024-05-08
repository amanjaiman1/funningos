import React from 'react';
import "../index.css"
import { footerImage } from '../assets';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-white Footer py-8">
      <div className="container mx-auto flex justify-around px-36 pb-8 items-center">
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="text-lg text-left font-semibold">Contact Us</h3>
          <ul className="mt-4 text-left space-y-5">
            <li>Park Manager - 12 223 322</li>
            <li>Ticket Counter - 13 133 131313</li>
            <li>Franchise - 2242 42 42 424</li>
            <li>Corporate Deals - 23232 4 242 424</li>
            <li>Safety Incharge - 2332 24 244</li>
          </ul>
        </div>

        {/* Middle Section - Image */}
        <div className="footer-middle">
          {/* Your image goes here */}
          <img src={footerImage} alt="Footer Image" />
        </div>

        {/* Right Section */}
        <div className="footer-right text-left flex justify-center space-x-10 align-middle">
          <div className="">
            <h3 className="text-lg font-semibold">Events</h3>
            <ul className="mt-2 space-y-5">
              <li><a href="#"> Birthday </a></li>
              <li><a href="#"> Baby Shower </a></li>
              <li><a href="#"> Pre Wedding </a></li>
              <li><a href="#"> Kitty Party </a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Corporate</h3>
            <ul className="mt-2 space-y-5">
              <li><a href="#"> Meeting </a></li>
              <li><a href="#"> Incentive </a></li>
              <li><a href="#"> Corporate Games </a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr  />

      {/* Bottom Section */}
      <div className="container mx-auto flex justify-evenly items-center mt-5 pb-5">
        {/* Social Media Icons */}
        <div className="footer-social flex items-center align-middle">
          {/* Social media icons go here */}
          {/* Example: */}
          <h1 className='text-[20px]'>Follow Us:</h1>
          <div className='text-2xl ml-5'>
            <a href="#" className="mr-4"><i className="fab fa-facebook"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-instagram"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-youtube"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-snapchat"></i></a>
          </div>
        </div>

        {/* Download Buttons */}

        <div className="footer-download flex items-center align-middle space-x-5">
          <h2>Download the buyer app: </h2>
          <button className="bg-[#929292] text-white px-4 py-2 rounded mr-4 "><i className="fa-brands fa-apple text-[20px]"></i> App Store</button>
          <button className="bg-[#929292] text-white px-4 py-2 rounded mr-4"><i class="fa-brands fa-google-play"></i> Google Play</button>
          <button className="bg-[#929292] text-white px-4 py-2 rounded"><i class="fa-solid fa-qrcode"></i> QR Code</button>
        </div>
      </div>

      <hr />


      <div className=' pt-10 space-y-5'>
        <ul className=' flex justify-center space-x-20 '>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Security Mesaures</a></li>
          <li><a href="#">IP Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
        <p className=' pt-5 text-[#504b4b]'>Copyright 2023 Publisher Representatives Limited. All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;