import React, { useState} from 'react'
import { RiSendPlaneLine } from "react-icons/ri";
import { IoStorefrontSharp } from "react-icons/io5";

const Locator = () => {


  return (
    <div>
      <div className="container-fluid shadow-lg">

          <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className='text-dark me-3'>Home &gt; </a>
              </li>
              <li className=" fw-bold breadcrumb-item active" aria-current="page">
                Store Locator
              </li>
            </ol>
            <h1 className='text-dark ms-3 py-2 fs-2 fw-bold'>Store Locator</h1>
          </nav>

      </div>
      <div className="container-fluid shadow-lg py-3 mt-3">
            <div className="row ms-5 my-2">
                <div className="col-3 mt-5">
                  <form>
                    <select className="form-control" id="state">
                        <optgroup label='State'>
                          <option value="State">State</option>
                          <option value="Anambra">Anambra</option>
                          <option value="Lagos">Lagos</option>
                          <option value="Oyo">Oyo</option>
                        </optgroup>
                    </select>
                  </form>
                </div>
                
                <div className="col-3 mt-5">
                  <form>
                    <select className="form-control" id="city">
                        <optgroup label='city'>
                        <option value="City">City</option>
                          <option value="Onitsha">Onitsha</option>
                          <option value="Awka">Akwa</option>
                          <option value="Nnewi">Nnewi</option>
                          <option value="Ikeja">Ikeja</option>
                          <option value="Badagry">Badagry</option>
                          <option value="Lekki">Lekki</option>
                          <option value="Mokola">Mokola</option>

                        </optgroup>
                    </select>
                  </form>
                </div>

                <div className="col-3">
                  <button type="submit" className="btn btn-outline-secondary mt-5 mx-5">Apply Selection</button>
                </div>
                <div className="col-3">
                  <button type="submit" className="btn btn-outline-secondary mt-5 mx-2">Show All</button>
                </div>

            </div>

            
      </div>
      <div className="container-fluid px-2 text-dark fw-bold" style={{backgroundColor: "#e2e2e2"}}><h6 className='fw-bold ms-5'>There are 28 Konga stores</h6></div>

      <div className="container-fluid mt-5 p-4" style={{backgroundColor: "#f2f2f2"}}>
        <div className="row">
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3">
                        <IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50'>KongaShop Ikeja Konga Store</span><span    className="text-dark fw-bold">16, Otigba Street Adj. Police Post, Computer Village, Ikeja</span><span></span>
                        </div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>07032744163</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Gbagada Konga Store</span><span className="text-dark fw-bold mx-3">1, Redemption Crescent</span><span></span>
                        </div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09120146206</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Surulere Konga Store</span><span    className="text-dark fw-bold mx-3">78, Bode Thomas Road</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09010401207</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50'>KongaShop Ikoyi Konga Store</span><span className="text-dark fw-bold">2 Norman Williams By Keffi Off Awolowo Road</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08095460751</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2 "><span className='text-black-50 mx-2'>KongaShop Admirality Konga Store</span><span    className="text-dark fw-bold mx-2">Plot 6 No 69a Admiralty Way Lekki, Lagos</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09036033723</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Cherub Mall Konga Store</span><span    className="text-dark fw-bold mx-3">Km 18 Lekki Epe Express Way, Alpha Beach</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08028339802</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 '>KongaShop Abuja1 Konga Store</span><span    className="text-dark fw-bold mx-1">Plot 20 Port Harcourt Crescent, Area 11</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08028342515</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50'>KongaShop Abuja2 Konga Store</span><span    className="text-dark fw-bold">Banex Plaza Beside Unity Bank, Wuse</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09070814351</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Enugu 1 Konga Store</span><span    className="text-dark fw-bold mx-3">134 Upper Chime Avenue</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09070038820</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Kano Konga Store</span><span    className="text-dark fw-bold mx-3">15/16 Post Office Road</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09070069446</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-2 '>KongaShop Ibadan Konga Store</span><span    className="text-dark fw-bold mx-3">Heritage House, Near Alaafia Hospital, Adjacent Idea Konsult, Adekunle faj...</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={50} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08028343676</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Owerri Konga Store</span><span    className="text-dark fw-bold mx-3">65b Mbaise Road</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08028333832</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Asaba Konga Store</span><span    className="text-dark fw-bold mx-3">339 Nnebisi Road</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08028343749</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Warri Konga Store</span><span    className="text-dark fw-bold mx-3">37 Deco Road Opp.Robinson Plaza</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09013288088</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Uyo Konga Store</span><span    className="text-dark fw-bold mx-3">7 Ikot Ekpene Roab By Plaza Round About</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08027149749</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop PortHarcourt Konga Store</span><span    className="text-dark fw-bold mx-3">146, Trans, Amadi Industrial Layout</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08028992886</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50'>KongaShop Ikorodu Konga Store</span><span    className="text-dark fw-bold">38 Ayangbure Road Off Ikorodu Round About</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08028345321</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Ikeja Konga Store</span><span    className="text-dark fw-bold mx-3">No 14 Kodesho Street, Beside Cash And Carry</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09070038819</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Festac Konga Store</span><span    className="text-dark fw-bold mx-3">Plot 1596, C Close, 4th Avenue, Festac Town</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09012520425</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Ogba Konga Store</span><span    className="text-dark fw-bold mx-3">3b Cocoa Industries</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08183527831</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Saka Tinubu Street Konga Store</span><span    className="text-dark fw-bold mx-3">11 Saka Tinubu Street</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>07040566052</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Phc 2 Konga Store</span><span    className="text-dark fw-bold mx-3">No.22b Old Aba Road Rumuogba, Opposite Woji Junction By First Artillery. P...</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09047313031</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50'>KongaShop Ajah Konga Store</span><span    className="text-dark fw-bold">Km 22 Lekki Epe Expressway Way Ilaje Ajah</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09070048536</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50'>KongaShop Onitsha Konga Store</span><span    className="text-dark fw-bold">65 Old Market Road, Beside Eco-bank</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>09010401213</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50'>KongaShop Abule Ado Konga Store</span><span    className="text-dark fw-bold">389, Old Ojo Road,Abule-ado Bus Stop, Satellite Town</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08098506690</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50'>KongaShop Ikotun Konga Store</span><span    className="text-dark fw-bold">Idimu Road, Ikotun Bus Stop At The Back of Brt Bus Stop, Opposite Ikotun M...</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08183345538</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Konga Staff Ogba</span><span  className="text-dark fw-bold mx-3">33b Cocoa Industries</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                    <h6 className='text-dark fw-bold'>08183527831</h6>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3">
                    <div className="d-flex flex-row mb-3"><IoStorefrontSharp className='icon-circle 'size={50} />
                        <div className="d-flex flex-column ml-2"><span className='text-black-50 mx-3'>KongaShop Nestle Nig</span><span    className="text-dark fw-bold">Nestle Eds Alimosho</span><span></span></div>
                        <RiSendPlaneLine className='icon-circle2' size={40} />
                    </div>
                    <hr style={{width: "25.4em"}} />
                    <h6 className='text-black-50'>Working Hours</h6>
                    <h6 className='text-dark fw-bold'>Monday - Saturday, 8am - 6pm</h6>
                    <h6 className='text-black-50'>Phone Number</h6>
                </div>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Locator
