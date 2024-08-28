import imageSixtyOne from '../images/imageSixtyOne.png';
import imageSixtyTwo from '../images/imageSixtyTwo.png';
import imageSixtyThree from '../images/imageSixtyThree.png';
import imageSixtyFour from '../images/imageSixtyFour.png';
import imageSixtyFive from '../images/imageSixtyFive.png';
import imageSixtySix from '../images/imageSixtySix.png';
import imageSixtySeven from '../images/imageSixtySeven.png';
import imageSixtyEight from '../images/imageSixtyEight.png';

const HomeFive = () => {
  document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('bi')) {
        const star = e.target;
        const ratingContainer = star.closest('.star-rating');
        const stars = ratingContainer.querySelectorAll('.bi');
        const index = Array.from(stars).indexOf(star);

        stars.forEach((s, i) => {
          s.classList.toggle('selected', i <= index);
        });

        ratingContainer.setAttribute('data-rating', index + 1);
      }
    });
  });

  // Card data array with different contents
  const cardsData = [
    { image: imageSixtyOne, title: "Starlink Actuated Standard", price: "519,999", oldPrice: "200,000", discount: "-15%", savings: "63,401" },
    { image: imageSixtyTwo, title: "Wireless Earbuds", price: "15,999", oldPrice: "25,000", discount: "-20%", savings: "9,001" },
    { image: imageSixtyThree, title: "4K Ultra HD TV", price: "299,999", oldPrice: "350,000", discount: "-14%", savings: "50,001" },
    { image: imageSixtyFour, title: "Smartwatch Series 6", price: "119,999", oldPrice: "150,000", discount: "-20%", savings: "30,001" },
    { image: imageSixtySeven, title: "Gaming Laptop", price: "899,999", oldPrice: "1,000,000", discount: "-10%", savings: "100,001" },
    { image: imageSixtySix, title: "Bluetooth Speaker", price: "9,999", oldPrice: "12,000", discount: "-17%", savings: "2,001" },
    { image: imageSixtyFive, title: "Smart Refrigerator", price: "619,999", oldPrice: "700,000", discount: "-11%", savings: "80,001" },
    { image: imageSixtyEight, title: "Drone with Camera", price: "149,999", oldPrice: "200,000", discount: "-25%", savings: "50,001" }
  ];

  return (
    <div className="homefive-container mt-4" style={{ overflowY: 'auto', maxHeight: '600px' }}>
      <div className="homefive-top d-flex">
        <h2 className="ms-2 mb-1 mt-3">Same Day Delivery (KongaNow)</h2>
        <div className="d-flex me-5 ms-5 mt-3 w-70 justify-content-between">
          <a className="mt-2" href="#">See more</a>
          <p className="bg-danger p-2"><i className="bi bi-exclamation-circle-fill"></i>T & C Apply</p>
        </div>
      </div>
      <div className="ms-5 d-flex" style={{ overflowX: 'auto', width: '96%' }}>
        {/* Card components */}
        {cardsData.map((card, index) => (
          <div className="card1 me-3 mb-3 mt-2" key={index} style={{ flex: '0 0 19%', maxWidth: '20%' }}>
            <img src={card.image} alt={`home-four-pic-${index}`} style={{ width: "100%", height: "auto" }} />
            <div className="card-body mb-0 text-center">
              <p className="card-text mt-0" style={{ whiteSpace: "nowrap" }}>{card.title}</p>
              <div className="d-flex justify-content-between pe-2 ps-2">
                <h5 className="card-title">{card.price}</h5>
                <p className="cars">{card.oldPrice}</p>
                <p className="bg-warning text-green">{card.discount}</p>
              </div>
              <p className="cars2">You saved {card.savings}</p>
              <div className="star-rating">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeFive;
