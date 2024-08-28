import imageTwentyTwo from '../images/imageTwentyTwo.png';
import imageTwentyThree from '../images/imageTwentyThree.png';
import imageTwentyFour from '../images/imageTwentyFour.png';
import imageTwentyFive from '../images/imageTwentyFive.png';
import imageTwentySix from '../images/imageTwentySix.png';
import imageTwentySeven from '../images/imageTwentySeven.png';
import imageTwentyEight from '../images/imageTwentyEight.png';
import imageTwentyNine from '../images/imageTwentyNine.png';
import imageThirty from '../images/imageThirty.png';
import imageThirtyOne from '../images/imageThirtyOne.png';
import imageThirtyTwo from '../images/imageThirtyTwo.png';
import imageThirtyThree from '../images/imageThirtyThree.png';
import imageThirtyFour from '../images/imageThirtyFour.png';
import imageThirtyFive from '../images/imageThirtyFive.png';
import imageThirtySix from '../images/imageThirtySix.png';
import imageThirtySeven from '../images/imageThirtySeven.png';
import imageThirtyEight from '../images/imageThirtyEight.png';
import imageThirtyNine from '../images/imageThirtyNine.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeSeven = () => {
  const imagesWithLinks = [
    { src: imageTwentyTwo, url: "https://www.lg.com" },
    { src: imageTwentyThree, url: "https://www.hp.com" },
    { src: imageTwentyFour, url: "https://www.itec.com" },
    { src: imageTwentyFive, url: "https://www.cerave.com" },
    { src: imageTwentySix, url: "https://www.starlink.com" },
    { src: imageTwentySeven, url: "https://www.tecno.com" },
    { src: imageTwentyEight, url: "https://www.tgi.com" },
    { src: imageTwentyNine, url: "https://www.samsung.com" },
    { src: imageThirty, url: "https://www.apple.com" },
    { src: imageThirtyOne, url: "https://www.intel.com" },
    { src: imageThirtyTwo, url: "https://www.ienovo.com" },
    { src: imageThirtyThree, url: "https://www.vivo.com" },
    { src: imageThirtyFour, url: "https://www.ring.com" },
    { src: imageThirtyFive, url: "https://www.unilever.com" },
    { src: imageThirtySix, url: "https://www.thermocool.com" },
    { src: imageThirtySeven, url: "https://www.infinix.com" },
    { src: imageThirtyEight, url: "https://www.nexus.com" },
    { src: imageThirtyNine, url: "https://www.nivea.com" },
  ];

  return (
    <div className="container-fluid">
      <div className="mt-2">
        <h5 className="bg-warning text-center py-2 mx-2">Official Store</h5>
      </div>
      <div className="row mx-2">
        {imagesWithLinks.map((image, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2 p-1">
            <a href={image.url} target="_blank" rel="noopener noreferrer">
              <img 
                src={image.src} 
                alt={`Image ${index + 1}`} 
                className="img-fluid w-100 hover-zoom" 
                style={{ cursor: 'pointer' }} 
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSeven;
