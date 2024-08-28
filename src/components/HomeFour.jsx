import imageFiftyThree from '../images/imageFiftyThree.png';
import imageFiftyFour from '../images/imageFiftyFour.png';
import imageFiftyFive from '../images/imageFiftyFive.png';
import imageFiftySix from '../images/imageFiftySix.png';
import imageFiftySeven from '../images/imageFiftySeven.png';
import imageFiftyEight from '../images/imageFiftyEight.png';
import imageFiftyNine from '../images/imageFiftyNine.png';
import imageSixty from '../images/imageSixty.png';

const HomeFour = () => {
  return (
    <div style={{ overflowY: 'auto', maxHeight: '500px' }}>
      <div>
        <h5 className="ms-4 me-4 sponsored">Sponsored Product</h5>
      </div>
      <div className="ms-5 d-flex" style={{ overflowX: 'auto', paddingBottom: '20px' }}>
        <div
          className="d-flex"
          style={{
            minWidth: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '16px',
          }}
        >
          {/* First 5 cards */}
          <div className="card1">
            <img src={imageFiftyThree} alt="home-four-pic" style={{ width: '100%', height: '260px', padding: '20px' }} />
            <div className="card-body mb-0 text-center">
              <p className="card-text mt-0" style={{ whiteSpace: 'nowrap' }}>Starlink Actuated Standard</p>
              <div className="d-flex justify-content-between pe-2 ps-2">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
              </div>
              <p className="cars2">You saved 63,401</p>
            </div>
          </div>
          <div className="card1">
            <img src={imageFiftyFour} alt="home-four-pic" style={{ width: '100%', height: '260px', padding: '20px' }} />
            <div className="card-body mb-0 text-center">
              <p className="card-text mt-0" style={{ whiteSpace: 'nowrap' }}>Starlink Actuated Standard</p>
              <div className="d-flex justify-content-between pe-2 ps-2">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
              </div>
              <p className="cars2">You saved 63,401</p>
            </div>
          </div>
          <div className="card1">
            <img src={imageFiftyFive} alt="home-four-pic" style={{ width: '100%', height: '260px', padding: '20px' }} />
            <div className="card-body mb-0 text-center">
              <p className="card-text mt-0" style={{ whiteSpace: 'nowrap' }}>Starlink Actuated Standard</p>
              <div className="d-flex justify-content-between pe-2 ps-2">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
              </div>
              <p className="cars2">You saved 63,401</p>
            </div>
          </div>
          <div className="card1">
            <img src={imageFiftySix} alt="home-four-pic" style={{ width: '100%', height: '260px', padding: '20px' }} />
            <div className="card-body mb-0 text-center">
              <p className="card-text mt-0" style={{ whiteSpace: 'nowrap' }}>Starlink Actuated Standard</p>
              <div className="d-flex justify-content-between pe-2 ps-2">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
              </div>
              <p className="cars2">You saved 63,401</p>
            </div>
          </div>
          <div className="card1">
            <img src={imageFiftySeven} alt="home-four-pic" style={{ width: '100%', height: '260px', padding: '20px' }} />
            <div className="card-body mb-0 text-center">
              <p className="card-text mt-0" style={{ whiteSpace: 'nowrap' }}>Starlink Actuated Standard</p>
              <div className="d-flex justify-content-between pe-2 ps-2">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
              </div>
              <p className="cars2">You saved 63,401</p>
            </div>
          </div>
        </div>

        {/* Remaining 3 cards (scrollable) */}
        <div className="d-flex" style={{ minWidth: '60%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div className="card1">
            <img src={imageFiftyEight} alt="home-four-pic" style={{ width: '100%', height: '260px', padding: '20px' }} />
            <div className="card-body mb-0 text-center">
              <p className="card-text mt-0" style={{ whiteSpace: 'nowrap' }}>Starlink Actuated Standard</p>
              <div className="d-flex justify-content-between pe-2 ps-2">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
              </div>
              <p className="cars2">You saved 63,401</p>
            </div>
          </div>
          <div className="card1">
            <img src={imageFiftyNine} alt="home-four-pic" style={{ width: '100%', height: '260px', padding: '20px' }} />
            <div className="card-body mb-0 text-center">
              <p className="card-text mt-0" style={{ whiteSpace: 'nowrap' }}>Starlink Actuated Standard</p>
              <div className="d-flex justify-content-between pe-2 ps-2">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
              </div>
              <p className="cars2">You saved 63,401</p>
            </div>
          </div>
          <div className="card1">
            <img src={imageSixty} alt="home-four-pic" style={{ width: '100%', height: '260px', padding: '20px' }} />
            <div className="card-body mb-0 text-center">
              <p className="card-text mt-0" style={{ whiteSpace: 'nowrap' }}>Starlink Actuated Standard</p>
              <div className="d-flex justify-content-between pe-2 ps-2">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
              </div>
              <p className="cars2">You saved 63,401</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFour;
