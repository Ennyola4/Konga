import imageFortyThree from '../images/imageFortyThree.png';
import imageFortyFour from '../images/imageFortyFour.png';
import imageFortyFive from '../images/imageFortyFive.png';
import imageFortySix from '../images/imageFortySix.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeNine = () => {
  const containerStyle = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', height: 'auto', padding: '.7rem', margin: 0 };

  const cardStyle = { flex: '1 1 20%', margin: '.6rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' };

  const imgStyle = { width: '100%', height: '210px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px'};

  const cardBodyStyle = { padding: '1rem'};

  const cardTextStyle = { whiteSpace: 'nowrap', marginLeft: '10px' };

  const priceStyle = { color: 'red' };

  const discountStyle = { color: 'green' };

  const savingsStyle = { color: '#666' };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={imageFortyThree} alt="home-four-pic" style={imgStyle} />
        <div style={cardBodyStyle}>
          <h5 className="mb-4">FITNESS TOOLS & EQUIPMENT</h5>
          <p className="fitness mb-4">Get Fitness Equipment At Amazing Discounts</p>
          <p><a href="#" style={{ color: "red", textDecoration: "none" }}>Shop Now &gt;</a></p>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={imageFortyFour} alt="home-four-pic" style={imgStyle} />
        <div style={cardBodyStyle}>
          <h5 className="mb-4">FITNESS TOOLS & EQUIPMENT</h5>
          <p className="fitness mb-4">Get Fitness Equipment At Amazing Discounts</p>
          <p><a href="#" style={{ color: "red", textDecoration: "none" }}>Shop Now &gt;</a></p>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={imageFortyFive} alt="home-four-pic" style={imgStyle} />
        <div style={cardBodyStyle}>
          <h5 className="mb-4">FITNESS TOOLS & EQUIPMENT</h5>
          <p className="fitness mb-4">Get Fitness Equipment At Amazing Discounts</p>
          <p><a href="#" style={{ color: "red", textDecoration: "none" }}>Shop Now &gt;</a></p>
        </div>
      </div>
      <div style={cardStyle}>
        <img src={imageFortySix} alt="home-four-pic" style={imgStyle} />
        <div style={cardBodyStyle}>
          <h5 className="mb-4">FITNESS TOOLS & EQUIPMENT</h5>
          <p className="fitness mb-4">Get Fitness Equipment At Amazing Discounts</p>
          <p><a href="#" style={{ color: "red", textDecoration: "none", }}>Shop Now &gt;</a></p>
        </div>
      </div>
      <div className='p-3 mb-4'>
        <h5>Konga Online Shopping in Nigeria - Best Shopping Site</h5>
        <p className="fitness1 mb-4 justify-content-justify">Konga.com is Nigeria’s number one online Shopping destination.We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include Food and drinks, automotive and industrial, books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and memorable, there are also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card or via KongaPay, which is a convenient and secured payment solution. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly.</p>
      </div>
    </div>
  );
};

export default HomeNine;
