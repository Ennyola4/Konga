import React from 'react'
import imgOnko from '../images/imgOnko.png';
import imgMeji from '../images/imgMeji.png';
import imgMeta from '../images/imgMeta.png';
import imgMerin from '../images/imgMerin.png';
import imgMarun from '../images/imgMarun.png';
import imgMefa from '../images/imgMefa.png';
import imgMeje from '../images/imgMeje.png';
import imgMejo from '../images/imgMejo.png';

const Product = () => {
  return (
    <div>
        <div className="container-fluid shadow-lg">

              <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/" className='text-dark me-3'>Home > </a>
                  </li>
                  <li className="fs-6 breadcrumb-item active" aria-current="page" style={{fontWeight:"700", fontSize:"13px"}}>
                    <a href="/product" className='text-dark mt-3'>Sell on Konga</a>
                  </li>
                </ol>
                <h1 className='text-dark ms-3 py-2 fs-2 fw-bold'>Sell on Konga</h1>
              </nav>
            </div>

           <div className="container-fluid p-2" style={{backgroundColor:"#f2f2f2"}}>
           <div className="container-xxl  mt-5 justify-content-between bg-white d-flex" style={{padding:"30px 10px", minHeight:"60vh", gap:"50px"}}>
            
                  <div className="img mt-5" style={{width:"50%", padding:"30px"}}>
                  <img src={imgOnko} style={{width:"400px", margin:"0 40px", position:"relative"}} />
                  </div>

                  <div className="text mt-5 me-5 p-2">
                  <h3 style={{fontSize:"50px", fontWeight:"700"}}>Grow your business online</h3> <br />
                  <p style={{fontSize:"18px", fontWeight:"400", letterSpacing:"1px", margin:" 1em 0 2em"}}>Reach millions of buyers in every state in Nigeria easily, get your store on Konga today!</p>

                  <a href="https://shq.konga.com/register?_gl=1*1rmyznd*_gcl_au*MTMwODc5NzI4NS4xNzI0MzY1Mjky" className='btn border border-2 border-black-50 border-secondary text-secondary text-black-50'>Register Now</a>
                </div>
              </div>
              <div className="container-fluid p-5 bg-white mt-5">
                <h2 className='fs-1 fw-bold mt-5 text-center p-3'>Why Sell on Konga?</h2>
                <div className="container mt-5 mx-3 my-3 text-center">
                <div className="row">
                  <div className="col-4">
                    <img src={imgMeji} alt="image" />
                    <h5 className='fw-bold fs-6'>Earn More Money</h5>
                    <p className='fs-6 text-black-50'>Konga is one of the largest websites in Nigeria. Sell to over 50 million buyers across every state in Nigeria</p>

                  </div>
                  <div className="col-4">
                    <img src={imgMeta} alt="" />
                    <h5 className='fw-bold fs-6'>Communication is Easy</h5>
                    <p className='fs-6 text-black-50'>We make it easy to exchange messages with buyers who may have questions.</p>
                  </div>
                  <div className="col-4">
                    <img src={imgMerin} alt="" />
                    <h5 className='fw-bold fs-6'>Low Commissions</h5>
                    <p className='fs-6 text-black-50'>Commission fees are as low as 3%, and you only pay when you successfully sell your product.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <img src={imgMarun} alt="image" />
                    <h5 className='fw-bold fs-6'>You Have Our Support 24/7</h5>
                    <p className='fs-6 text-black-50'>Konga provides various tools to increase your success including: our online SellerHQ and our dedicated merchant support teams.</p>
                  </div>
                  <div className="col-4">
                    <img src={imgMefa} alt="image" />
                    <h5 className='fw-bold fs-6'>You're in Control</h5>
                    <p className='fs-6 text-black-50'>You choose the price for your return policy, your delivery method on paid orders, and other important options.</p>
                    
                  </div>
                  <div className="col-4">
                    <img src={imgMeje} alt="image" />
                    <h5 className='fw-bold fs-6'>We Make Sure It's Safe</h5>
                    <p className='fs-6 text-black-50'>Konga is the safest and most trusted platform to buy and sell online in Nigeria. We’ve built a community that takes safety & security seriously for both buyers and sellers.</p>
                  </div>
                </div>
                </div>
              </div>
            <div className="container-fluid border border-2 p-5   mt-5 justify-content-between bg-white d-flex" style={{padding:"30px 10px", minHeight:"80vh", gap:"50px"}}>

                <div className=" text mt-5 me-5 py-3">
                  <h3 style={{fontSize:"50px", fontWeight:"700"}}>Earn Money, Hassle Free</h3> <br />
                  <a href="https://shq.konga.com/register?_gl=1*1rmyznd*_gcl_au*MTMwODc5NzI4NS4xNzI0MzY1Mjky" className='btn border border-2 border-black-50 border-secondary text-secondary text-black-50'>Register Now</a>
                </div>

                <div className="img mt-5" style={{width:"50%", padding:"30px"}}>
                  <img src={imgMejo} style={{width:"550px", margin:"0 40px", position:"relative"}} />
                </div>
           </div>
      </div>
  </div>
  )
}

export default Product