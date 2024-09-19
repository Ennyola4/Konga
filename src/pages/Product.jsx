import React from 'react'
import imageSixtyNine from '../images/imageSixtyNine.png';
import imageSeventy from '../images/imageSeventy.png';
import imageSeventyOne from '../images/imageSeventyOne.png';
import imageSeventyTwo from '../images/imageSeventyTwo.png';
import imageSeventyThree from '../images/imageSeventyThree.png';
import imageSeventyFour from '../images/imageSeventyFour.png';
import imageSeventyFive from '../images/imageSeventyFive.png';
import imageSeventySix from '../images/imageSeventySix.png';

const Product = () => {
  return (
    <div className='ash-background'>
      <div className='bg-white p-3'>
      <p style={{ textAlign: 'left', paddingLeft: '25px', fontSize: '14px' }}>
        <span 
          style={{ cursor: 'pointer' }} 
          onClick={() => window.location.href = '/'}>Home</span> 
        &nbsp;&gt;&nbsp; 
        <span 
          style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => window.location.reload()}>
          Sell on Konga
        </span>
      </p>
      <h1 style={{ fontSize: '45px', fontWeight: 'bold', marginLeft: '25px' }}>Sell on Konga</h1>
      </div><br />
      <div className='p-4 d-flex' style={{ backgroundColor: 'white', width: '95%', margin: '0 auto', display: 'flex' }}>
      <div style={{ width: '35%',  marginTop: '50px' }}>
      <img src={imageSixtyNine} alt='Placeholder' style={{ width: '70%', height: 'auto', objectFit: 'cover', marginLeft: '3rem' }}/>
      </div>
      <div style={{ width: '65%' }}>
        <h1 style={{ fontSize: '55px', fontWeight: 'bold', marginTop: '25px' }}>Grow your business Online</h1>
        <p style={{ textAlign: 'left', fontSize: '22px' }}>Reach millions of buyers in every state in Nigeria easily, get your store on Konga today!</p>
        <button type="button" class="btn btn-outline-danger">Register Now</button>
      </div>
      </div><br />
      <div className='p-4' style={{ backgroundColor: 'white', width: '95%', margin: '0 auto', justifyContent: 'center', textAlign: 'center'}}>
        <h1 style={{ fontSize: '45px', fontWeight: 'bold', marginTop: '25px' }}>Why Sell on Konga?</h1><br />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px',  padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src={imageSeventy} alt='Image 1' style={{ width: '42%', height: 'auto' }} />
          <h6 style={{ fontWeight: 'bold', marginBottom: '0', maxWidth: '230px', margin: '0 auto' }}>Earn More Money</h6>
          <p style={{ fontSize: '12px', marginTop: '0', maxWidth: '230px', margin: '0 auto' }}>
            Konga is one of the largest websites in Nigeria. Sell to over 50 million buyers across every state in Nigeria.
          </p>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src={imageSeventyOne} alt='Image 1' style={{ width: '42%', height: 'auto' }} />
          <h6 style={{ fontWeight: 'bold', marginBottom: '0', maxWidth: '230px', margin: '0 auto' }}>Communication is Easy</h6>
          <p style={{ fontSize: '12px', marginTop: '0', maxWidth: '230px', margin: '0 auto' }}>
          We make it easy to exchange messages with buyers who may have questions.
          </p>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src={imageSeventyTwo} alt='Image 1' style={{ width: '42%', height: 'auto' }} />
          <h6 style={{ fontWeight: 'bold', marginBottom: '0', maxWidth: '230px', margin: '0 auto' }}>Low Commissions</h6>
          <p style={{ fontSize: '12px', marginTop: '0', maxWidth: '230px', margin: '0 auto' }}>
          Commission fees are as low as 3%, and you only pay when you successfully sell your product.
          </p>
        </div>
        <div style={{ textAlign: 'center'}}>
          <img src={imageSeventyThree} alt='Image 1' style={{ width: '42%', height: 'auto' }} />
          <h6 style={{ fontWeight: 'bold', marginBottom: '0', maxWidth: '230px', margin: '0 auto' }}>You Have Our Support 24/7</h6>
          <p style={{ fontSize: '12px', marginTop: '0', maxWidth: '230px', margin: '0 auto' }}>
          Konga provides various tools to increase your success including: our online SellerHQ and our dedicated merchant support teams.
          </p>
        </div>
        <div style={{ textAlign: 'center'}}>
          <img src={imageSeventyFour} alt='Image 1' style={{ width: '42%', height: 'auto' }} />
          <h6 style={{ fontWeight: 'bold', marginBottom: '0', maxWidth: '230px', margin: '0 auto' }}>You are In Control</h6>
          <p style={{ fontSize: '12px', marginTop: '0', maxWidth: '230px', margin: '0 auto' }}>
          You choose the price for your return policy, your delivery method on paid orders, and other important options.
          </p>
        </div>
        <div style={{ textAlign: 'center'}}>
          <img src={imageSeventyFive} alt='Image 1' style={{ width: '42%', height: 'auto' }} />
          <h6 style={{ fontWeight: 'bold', marginBottom: '0', maxWidth: '230px', margin: '0 auto' }}>We Make Sure It's Safe</h6>
          <p style={{ fontSize: '12px', marginTop: '0', maxWidth: '230px', margin: '0 auto' }}>
          Konga is the safest and most trusted platform to buy and sell online in Nigeria. We’ve built a community that takes safety & security seriously for both buyers and sellers.
          </p>
        </div>
      </div>
      </div><br />
      <div className='d-flex' style={{ backgroundColor: 'white', width: '95%', margin: '0 auto', display: 'flex', paddingTop: '1rem', paddingLeft: '4rem', paddingRight: '4rem', paddingBottom: '3rem' }}>
      <div style={{ width: '60%', padding: '3rem'}}>
        <h1 style={{ fontSize: '45px', fontWeight: 'bold', marginTop: '25px' }}>Earn Money, Hassle Free</h1><br/>
        <button type="button" class="btn btn-outline-danger">Register Now</button>
      </div>
      <div style={{ width: '45%' }}>
          <img 
            src={imageSeventySix} 
            alt='Placeholder' 
            style={{ width: '100%', height: 'auto', objectFit: 'cover', position: 'relative', top: '9.2rem'   }}
          />
        </div>
      </div><br/><br/>
    </div>
  )
}

export default Product
