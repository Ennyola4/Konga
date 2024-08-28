import imageSixteen from '../images/imageSixteen.png';
import imageSeventeen from '../images/imageSeventeen.png';
import imageEighteen from '../images/imageEighteen.png';
import imageNinteen from '../images/imageNinteen.png';
import imageTwenty from '../images/imageTwenty.png';
import imageTwentyOne from '../images/imageTwentyOne.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeSix = () => {
  return (
    <div className="d-flex justify-content-between align-items-center m-4 flex-nowrap">
      <img src={imageSixteen} alt="Image 1" className="img-fluid" style={{ maxWidth: '15%', cursor: 'pointer' }} />
      <img src={imageSeventeen} alt="Image 2" className="img-fluid" style={{ maxWidth: '15%', cursor: 'pointer' }} />
      <img src={imageEighteen} alt="Image 3" className="img-fluid" style={{ maxWidth: '15%', cursor: 'pointer' }} />
      <img src={imageNinteen} alt="Image 4" className="img-fluid" style={{ maxWidth: '15%', cursor: 'pointer' }} />
      <img src={imageTwenty} alt="Image 5" className="img-fluid" style={{ maxWidth: '15%', cursor: 'pointer' }} />
      <img src={imageTwentyOne} alt="Image 6" className="img-fluid" style={{ maxWidth: '15%', cursor: 'pointer' }} />
    </div>
  );
};

export default HomeSix;
