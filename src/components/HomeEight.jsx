import imageForty from '../images/imageForty.png';
import imageFortyOne from '../images/imageFortyOne.png';
import imageFortyTwo from '../images/imageFortyTwo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeEight = () => {
  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-12 my-3">
          <img src={imageForty} alt="Image 1" className="img-fit p-3" />
        </div>
        <div className="col-6 d-flex m-2">
          <img src={imageFortyOne} alt="Image 2" className="img-fit p-2" />
          <img src={imageFortyTwo} alt="Image 3" className="img-fit p-2" />
        </div>
      </div>
    </div>
  );
};

export default HomeEight;
