import React from 'react'
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { ImWhatsapp } from "react-icons/im"
import { FiFacebook } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6"
import { RiInstagramFill } from "react-icons/ri"
import { FaYoutube } from "react-icons/fa";





const Footer = () => {
  return (
    <div className='overall-container1'>
        <div className='footer-top mb-0'>
           <div>
             <div  className='icon1 d-flex justify-content-evenly'>
               <h6><MdEmail /></h6>
               <ul>
                <li><h6>EMAIL</h6>konga@gmail.com</li>
               </ul>

               <h6><FaPhoneAlt /></h6>
               <ul>
                <li><h6>PHONE</h6>234-332-2233,334-223-4433</li>
               </ul>

               <h6><ImWhatsapp /></h6>
               <ul>
                <li><h6>WHATSAPP</h6>234-332-2233,334-665-7654</li>
               </ul>

               <ul>
                <li><h6>GET LATEST DEALS</h6>Our best promotions sent to your inbox.</li>
               </ul>
               <input type="text" placeholder='Email Address'/>
               <button className='button1 ml-0'><h5>Subscribe</h5>
               </button>
             </div>
           </div>
        </div>

        <div className='footer-bottom'>
            <div className='d-flex justify-content-around'>
              <div>
                <ul>
                  <li>
                  <li><h5 href ="#">ABOUT KONGA</h5></li> 
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Our Blog</a></li>
                    <li><a href="#">Forum</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                    <li><h5 href="#">PAYMENT</h5></li> 
                    <li><a href="#">KongaPay</a></li>
                    <li><a href="#">Wallet</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Verve</a></li>
                    <li><a href="#">Master Card</a></li>
                    <li><a href="#">Visa</a></li>

                </ul>
            </div>

            <div>
                <ul>
                    <li><h4 href="#">BUYING ON KONGA</h4></li> 
                    <li><a href="#">Buyer Safety Center</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Kong Return Policy</a></li>
                    <li><a href="#">Digital Services</a></li>
                    <li><a href="#">Bulk Purchases</a></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><h4 href="#">MORE INFO</h4></li>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Track My Order</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Authentic Items Policy</a></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><h4 href="#">MAKE MONEY ON KONGA</h4></li>
                    <li><a href="#">Become a Konga Affiliate</a></li>
                </ul>
            </div>

           

            <div className='d-flex'>
              <div>

              <ul>
                <li>
                <img src="https://static.vecteezy.com/system/resources/previews/021/496/284/original/apple-app-store-icon-logo-symbol-white-design-mobile-illustration-with-black-background-free-vector.jpg" alt="" />
              
              <img src="https://www.eunati.com.br/wp-content/uploads/2018/02/escola-brasileira-de-games-eu-na-ti-google-play-864x440.jpg" alt="" /> <br /><br />
              
              <h5>CONNECT WITH US</h5>
              <div className='d-flex'>
              <a href="#" className='btn btn-dark me-5'><h5><FiFacebook /></h5></a>
              <a href="#" className='btn btn-dark me-5'><h5><FaXTwitter /></h5></a>
              <a href="#" className='btn btn-dark me-5'><h5><RiInstagramFill /></h5></a>
              <a href="#" className='btn btn-dark me-5'><h5><FaYoutube /></h5></a>
              


              </div>


              </li>
              </ul>

              </div>
              
            </div>
           
            
         
            
          </div>
          <div className='text-center'>
            <h6>Created And Designed by </h6> <hr />
        </div>
         
        </div>
    </div>
  )
}

export default Footer