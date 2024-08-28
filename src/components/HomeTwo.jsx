import { FaBlog, FaMoneyBillWave, FaShoppingCart, FaPlane, FaBook, FaTv } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeTwo = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row text-center">
        <div className="col-2"><button className="btn custom-btn p-3 w-100 d-flex justify-content-center"><div className='me-3'><FaBlog /></div><div>Konga Blog</div></button></div>
        <div className="col-2"><button className="btn custom-btn p-3 w-100 d-flex justify-content-center"><div className='me-3'><FaMoneyBillWave /></div><div>Pay Bills</div></button></div>
        <div className="col-2"><button className="btn custom-btn p-3 w-100 d-flex justify-content-center"><div className='me-3'><FaShoppingCart /></div><div>Online Store</div></button></div>
        <div className="col-2"><button className="btn custom-btn p-3 w-100 d-flex justify-content-center"><div className='me-3'><FaPlane /></div><div>Flight Stores</div></button></div>
        <div className="col-2"><button className="btn custom-btn p-3 w-100 d-flex justify-content-center"><div className='me-3'><FaBook /></div><div>Book Fligts</div></button></div>
        <div className="col-2"><button className="btn custom-btn p-3 w-100 d-flex justify-content-center"><div className='me-3'><FaTv /></div><div>Watch KongaTv</div></button></div>
      </div>
    </div>
  );
};

export default HomeTwo;

