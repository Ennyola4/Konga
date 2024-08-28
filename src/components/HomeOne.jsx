import imageOne from '../images/imageOne.png';
import imageTwo from '../images/imageTwo.png';
import imageThree from '../images/imageThree.png';
import imageFour from '../images/imageFour.png';
import imageFive from '../images/imageFive.png';
import imageSix from '../images/imageSix.png';
import imageSeven from '../images/imageSeven.png';
import imageTwelve from '../images/imageTwelve.png';
import imageThirteen from '../images/imageThirteen.png';
import imageFourteen from '../images/imageFourteen.png';
import imageFifteen from '../images/imageFifteen.png';
import { PiImageDuotone } from 'react-icons/pi';

const HomeOne = () => {
  return (
    <div className='konga-container'>
      <div className='konga-container1'>
        <div id="carouselExampleIndicators" className="carousel slide" style={{ position: 'relative' }}>
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: 'none',
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: 'none',
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: 'none',
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: 'none',
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: 'none',
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: 'none',
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: 'none',
              }}
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={imageOne}
                className="d-block w-100"
                alt="aircraft"
              />
            </div>
            <div className="carousel-item">
              <img
                src={imageTwo}
                className="d-block w-100"
                alt="aircraft"
              />
            </div>
            <div className="carousel-item">
              <img
                src={imageThree}
                className="d-block w-100"
                alt="aircraft"
              />
            </div>
            <div className="carousel-item">
              <img
                src={imageFour}
                className="d-block w-100"
                alt="aircraft"
              />
            </div>
            <div className="carousel-item">
              <img
                src={imageFive}
                className="d-block w-100"
                alt="aircraft"
              />
            </div>
            <div className="carousel-item">
              <img
                src={imageSix}
                className="d-block w-100"
                alt="aircraft"
              />
            </div>
            <div className="carousel-item">
              <img
                src={imageSeven}
                className="d-block w-100"
                alt="aircraft"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: '10px',
            }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={{ filter: 'invert(1)' }} // Optional: to make the icon white
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '10px',
            }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{ filter: 'invert(1)' }} // Optional: to make the icon white
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='konga-container2'>
        <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
          <img src={imageTwelve} alt="aircraft" />
        </a>
        <a href="https://www.konga.com" target="_blank" rel="noopener noreferrer">
          <img src={imageThirteen} alt="aircraft" />
        </a>
        <a href="https://www.jiji.com" target="_blank" rel="noopener noreferrer">
          <img src={imageFourteen} alt="aircraft" />
        </a>
        <a href="https://www.infinix.com" target="_blank" rel="noopener noreferrer">
          <img src={imageFifteen} alt="aircraft" />
        </a>
      </div>
    </div>
  )
}

export default HomeOne
