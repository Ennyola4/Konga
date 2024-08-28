import imageFortySeven from '../images/imageFortySeven.png'
import imageFortyEight from '../images/imageFortyEight.png'
import imageFortyNine from '../images/imageFortyNine.png'
import imageFifty from '../images/imageFifty.png'
import imageFiftyOne from '../images/imageFiftyOne.png'
import imageFiftyTwo from '../images/imageFiftyTwo.png'

const HomeThree = () => {
  return (
    <div className="homethree-container">
      <div className="homethree-top d-flex">
        <p className="ms-2 me-5 mb-1 mt-2">Today's Deal</p>
        <a className="mt-3" href="#">See more</a>
      </div>
      <div>
        <div className="d-flex flex-wrap m-1">
          <div className=" card-hover p-3 flex-fill me-3">
            <div className="d-flex">
              <img src={imageFortySeven} alt="home-three-pic" style={{ width: "100px", height: "120px" }} />
              <div className="card-body ms-2">
                <p className="card-text mt-2" style={{ whiteSpace: "nowrap" }}>Starlink Actuated Standard Kit</p>
                <div className="d-flex justify-content-between">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
                </div>
                <p className="cars2">You saved 63,401</p>
              </div>
            </div>
          </div>
          <div className=" card-hover p-3 flex-fill me-3">
            <div className="d-flex">
              <img src={imageFortyEight} alt="home-three-pic" style={{ width: "100px", height: "120px" }} />
              <div className="card-body ms-2">
                <p className="card-text mt-2" style={{ whiteSpace: "nowrap" }}>Starlink Actuated Standard Kit</p>
                <div className="d-flex justify-content-between">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
                </div>
                <p className="cars2">You saved 63,401</p>
              </div>
            </div>
          </div>
          <div className="card-hover p-3 flex-fill">
            <div className="d-flex">
              <img src={imageFortyNine} alt="home-three-pic" style={{ width: "100px", height: "120px" }} />
              <div className="card-body ms-2">
                <p className="card-text mt-2" style={{ whiteSpace: "nowrap" }}>Starlink Actuated Standard Kit</p>
                <div className="d-flex justify-content-between">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
                </div>
                <p className="cars2">You saved 63,401</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap m-1">
          <div className=" card-hover p-3 flex-fill me-3">
            <div className="d-flex">
              <img src={imageFifty} alt="home-three-pic" style={{ width: "100px", height: "120px" }} />
              <div className="card-body ms-2">
                <p className="card-text mt-2" style={{ whiteSpace: "nowrap" }}>Starlink Actuated Standard Kit</p>
                <div className="d-flex justify-content-between">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
                </div>
                <p className="cars2">You saved 63,401</p>
              </div>
            </div>
          </div>
          <div className=" card-hover p-3 flex-fill me-3">
            <div className="d-flex">
              <img src={imageFiftyOne} alt="home-three-pic" style={{ width: "100px", height: "120px" }} />
              <div className="card-body ms-2">
                <p className="card-text mt-2" style={{ whiteSpace: "nowrap" }}>Starlink Actuated Standard Kit</p>
                <div className="d-flex justify-content-between">
                <h5 className="card-title">519,999</h5>
                <p className="cars">200,000</p>
                <p className="bg-warning text-green">-15%</p>
                </div>
                <p className="cars2">You saved 63,401</p>
              </div>
            </div>
          </div>
          <div className="card-hover p-3 flex-fill">
            <div className="d-flex">
              <img src={imageFiftyTwo} alt="home-three-pic" style={{ width: "100px", height: "120px" }} />
              <div className="card-body ms-2">
                <p className="card-text mt-2" style={{ whiteSpace: "nowrap" }}>Starlink Actuated Standard Kit</p>
                <div className="d-flex justify-content-between">
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
    </div>
  );
};

export default HomeThree;
