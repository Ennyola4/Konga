import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";
import { ImPhone } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
                 {/* {UPPER FOOTER} */}
        <div className='mt-5 py-1 text-light' style={{ backgroundColor: "#2e2e2e", overflow: "hidden"}}>
            <div className='d-flex justify-item-content-between align-items-center'  style={{ padding: "10px 0", flexWrap: "wrap"}}>

                {/* EMAIL SUPPORT */}
            <div style={{margin: "0 10px", flex: "0 1 200px"
            }}>
                <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: "#918c8c"
                    }}><TbMailFilled size={35}
                    style={{
                        background: '#fff',
                        color: '#000000',
                        cursor: 'pointer',
                        borderRadius: "20px",
                        marginRight: "10px",
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "35px",   
                        height: "35px",
                        }}/>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                        }}>
                            <span style={{
                                textAlign: "left",
                                color: "#918c8c",
                                marginBottom: "8px",
                                fontSize: "16px",
                                fontWeight: "bold",
                                }}>
                                EMAIL SUPPORT
                            </span>
                            <span style={{
                                textAlign: "left",
                                color: "#918c8c",
                                fontSize: "14px",
                                
                                }}>
                                    help@konga.com
                            </span>
                        </div>
                        </a>
                </div>

                {/* PHONE SUPPORT */}
            <div style={{
                margin: "0 10px",
                flex: "1 1 200px"
            }}>
                <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: "#918c8c"
                    }}><ImPhone size={35}
                    style={{
                        background: '#fff',
                        color: '#000000',
                        cursor: 'pointer',
                        borderRadius: "20px",
                        marginRight: "10px",
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "35px",   
                        height: "35px",
                        }}/>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                        }}>
                            <span style={{
                                textAlign: "left",
                                color: "#918c8c",
                                fontSize: "16px",
                                marginBottom: "8px",
                                fontWeight: "bold",
                                }}>
                                PHONE SUPPORT
                            </span>
                            <span style={{
                                textAlign: "left",
                                color: "#918c8c",
                                fontSize: "14px",
                                overflow: "hidden",
                                whiteSpace: "nowrap"
                                }}>
                                    0708 063 5700,0201 888 3435
                            </span>
                        </div>
                        </a>
                </div>

                    {/* WHATSAPP */}
            <div style={{
                margin: "0 10px",
                flex: "0 1 200px"
            }}>
                <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: "#918c8c"
                    }}><FaWhatsapp size={35}
                    style={{
                        background: '#fff',
                        color: '#000000',
                        cursor: 'pointer',
                        borderRadius: "20px",
                        marginRight: "10px",
                        padding: "6px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "35px",   
                        height: "35px",
                        }}/>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                        }}>
                            <span style={{
                                display: "block",
                                textAlign: "left",
                                color: "#918c8c",
                                fontSize: "16px",
                                marginBottom: "8px",
                                fontWeight: "bold",
                                }}>
                                WHATSAPP
                            </span>
                            <span style={{
                                display: "block",
                                textAlign: "left",
                                color: "#918c8c",
                                fontSize: "14px",
                                overflow: "hidden",
                                whiteSpace: "nowrap"
                                }}>
                                    0907 0038 400, 0809 460 555
                            </span>
                        </div>
                        </a>
                </div>


                    {/* LATEST DEALS */}
            <div style={{
                margin: "0 10px",
                flex: "1 1 200px"
            }}>
                <a href="#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: "#918c8c"
                    }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                        }}>
                            <span style={{
                                textAlign: "left",
                                color: "#918c8c",
                                fontSize: "16px",
                                marginBottom: "8px",
                                fontWeight: "bold",
                                }}>
                                GET LATEST DEALS
                            </span>
                            <span style={{
                                textAlign: "left",
                                color: "#918c8c",
                                fontSize: "13px",
                                overflow: "hidden",
                                whiteSpace: "nowrap"
                                }}>
                                    Our best promotions sent to your inbox.
                            </span>
                        </div>
                        </a>
                </div>
            <div style={{
                margin: "0 10px",
                flex: "1 1 200px",
                flexGrow: 1
            }}>
            <form className="d-flex align-items-center" style={{
                justifyContent: "center", 
            }}>
                    <input type="email" placeholder="Email Address" className="form-control my-2" style={{
                        padding: "12px",
                        fontSize: "14px",
                        height: "auto",
                        border: "none",
                        outline: "none",
                        borderRadius: '0px',
                         borderTopLeftRadius: "3px",
                        borderBottomLeftRadius: "3px"
                        }}/ >
                    <button className="btn btn-info my-2" style={{
                        backgroundColor: "#ed017f",
                        color: "#fff",
                        fontWeight: "bold",
                        border: "none",
                        outline: "none",
                        borderRadius: '0px',
                        borderTopRightRadius: "3px",
                        borderBottomRightRadius: "3px",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                        padding: "12px",
                        fontSize: "14px",
                    }}>Subscribe</button>
            </form>
            </div>

        </div>
     </div>
        
    
            {/* //   {MAIN FOOTER} //  */}
        <div className='mt-0 py-3 text-light' style={{ backgroundColor: "#0c0c0c"}}>
        <div className='d-flex justify-content-around'>
        <div>
            <ul>
              <li><h6 className="mb-4" style={{color: "#d1caca"}} href="#">ABOUT KONGA</h6></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Contact Us</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Careers</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Contact Us</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Our Blog</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Forum</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Terms &amp; Condition</a></li>
            </ul>
        </div>

        <div>
          <ul>
              <li><h6 className="mb-4" style={{color: "#d1caca"}} href="#">PAYMENT</h6></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">KongaPay</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Wallet</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Verve</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Mastercard</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Visa</a></li>
          </ul>
        </div>

        <div>
          <ul>
              <li><h6 className='mb-4' style={{color: "#d1caca"}} href="#">BUYING ON KONGA</h6></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Buyer Safety Centre</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">FAQs</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Delivery</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Konga Return Policy</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Digital Services</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Bulk Purchase</a></li>
          </ul>
        </div>

        <div>
          <ul>
              <li><h6 className="mb-4" style={{color: "#d1caca"}} href="#">MORE INFO</h6></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Site Map</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Track My Order</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Privacy Policy</a></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Authentic Items Policy</a></li>
          </ul>
        </div>

        <div>
          <ul>
              <li><h6 className="mb-4" style={{color: "#d1caca"}} href="#">MAKE MONEY ON KONGA</h6></li>
              <li><a className="small" style={{color: "#918c8c"}} href="#">Become a Konga Affiliate</a></li>
          </ul>
        </div>

        <div>
            <ul>
                <li>
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#000000',
                        color: '#fff',
                        border: 'none',
                        padding: '1px 15px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}>
                        <FaApple size={35} />
                        <div style={{
                             marginLeft: "10px",
                             display: "inline-flex",
                             flexDirection: "column",
                             justifyContent: "center",
 
                        }}>
                        <span style={{
                             display: "block",
                             textAlign: "left",
                             color: "#918c8c",
                             fontSize: "13px",
                             marginBottom: "-4px",
                             }}>
                                Download on
                        </span>
                        <span style={{
                             display: "block",
                             textAlign: "left",
                             color: "#918c8c",
                             fontSize: "18px",
                             fontWeight: "bold",
                             }}>
                                App Store
                        </span>
                        </div>
                    </button>
                </li>

                <li className='mt-4'>
                    <h6  style={{color: "#d1caca"}}>CONNECT WITH US
                    <div className='d-flex my-0' >
                        <div className='me-3 fs-2 icon-facebook'><FaFacebook/></div>
                        <div className='me-3 fs-2
                        icon-twitter'><FaXTwitter /></div>
                        <div className='me-3 fs-2
                        icon-instagram'><FaInstagram /></div>
                        <div className='me-3 fs-2
                        icon-youtube'><FaYoutube /></div>
                    </div>
                    </h6>
                </li>
            </ul>
        </div>

        <div className="mx-2">
            <ul>
                <li>
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#000000',
                        color: '#fff',
                        border: 'none',
                        padding: '1px 10px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}>
                        <IoLogoAndroid size={35}/>
                        <div style={{
                             marginLeft: "10px",
                             display: "inline-flex",
                             flexDirection: "column",
                             justifyContent: "center",
 
                        }}>
                        <span style={{
                             display: "block",
                             textAlign: "left",
                             color: "#918c8c",
                             fontSize: "13px",
                             marginBottom: "-4px",
                             }}>
                                Download on
                        </span>
                        <span style={{
                             display: "block",
                             textAlign: "left",
                             color: "#918c8c",
                             fontSize: "18px",
                             fontWeight: "bold",
                             }}>
                                Google Play
                        </span>
                        </div>
                    </button>
                </li>
            
            </ul>
        </div>

      </div>

                    {/* COPYRIGHT TAG */}
      <div className='text-center mt-5'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#918c8c",
      }}>
        <div style={{ flex: 1, height: '0.06px', background: '#918c8c' }}></div>
            <p style={{ margin: '0 7px'}}>Copyright &copy; 2024 Konga.com. All rights reserved</p>
            <div style={{ flex: 1, height: '0.06px', background: '#918c8c' }}></div>
        </div>

        <div className='text-center'  style={{color: "#918c8c"}}>
            <p>Made with ❤️ by Group C</p>
        </div>
    </div>

    </div>
  )
}

export default Footer
