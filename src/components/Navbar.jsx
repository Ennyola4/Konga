import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = ({ onLoginClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim() || ''; // If query is empty, use an empty string
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div>

      {/* <Header Section/> */}

      <header className="header bg-light text-light py-0 sticky-top">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row w-100">
            <div className="col text-center">
                <p className="text-dark my-1">TRAVEL</p>
            </div>
            <div className="col text-center">
                <p className="text-dark my-1"> KongaPay</p>
            </div>
            <div className="col text-center">
                <p className="text-dark my-1">KongaCorporate</p>
            </div>
            <div className="col text-center">
                <p className="text-dark my-1">KongaHealth</p>
            </div>
            <div className="col text-center">
                <p className="text-dark my-1">LOGISTICS</p>
            </div>
            <div className="col text-center">
                <p className="text-dark my-1">GROCERIES</p>
            </div>
            <div className="col text-center">
                <p className="text-dark my-1">KongaTV</p>
            </div>
            <div className="col text-center">
                <p className="text-dark my-1">KongaNOW</p>
            </div >
          </div>
        </div>
      </header>

      {/* <Main Navbar Section/> */}

      <nav className="navbar navbar-expand-lg sticky-top py-1">
        <div className="container-fluid custom-navbar">
          <a className="navbar-brand nav-link active text-white mx-2" href="/">Konga</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav">
                <li className="nav-item mt-3">
                    <a className="nav-link mx-5 text-white" aria-current="page" href="/locator">Store <br/> Locator</a>
                </li>
                
                <li className="nav-item mt-3">
                    <a className="nav-link text-white" href="/product">Sell on <br/> Konga</a>
                </li>
              
              <form className="mx-5" role="search" onSubmit={handleSearch}>
                <div className="input-group mt-4 mb-4" style={{ flexGrow: 1 }}>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search for products, brands and categories..."
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '500px',
                      outline: "none",
                      boxShadow: "none",
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                      borderColor: "#ced4da",
                    }}
                  />
                  <button
                    className="btn btn-warning"
                    type="submit"
                    style={{
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                      borderColor: "transparent"
                    }}
                  >
                    <FaSearch className="text-white" />
                  </button>
                </div>
              </form>

              <li className="nav-item dropdown mt-4">
                <a className="nav-link dropdown-toggle text-white" href="/help" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaQuestionCircle style={{ fontSize: "1.4em"}}/>  Help</a>
              <ul className="dropdown-menu">
                 <li><a className="dropdown-item" href="/help">FAQs</a></li>
                 <li><a className="dropdown-item" href="#">Contact Us</a></li>
                 <li><a className="dropdown-item" href="#">Track My Order</a></li>
                 <li><a className="dropdown-item" href="#">Konga Return Policy</a></li>
            </ul>
            </li>
    

                <div className="d-flex nav-item mx-4 text-white mt-3">
                <li >
                <a className="nav-link text-white btn log-in" href="#" onClick={onLoginClick}>Login / <br/> Signup</a>
                    </li>
                </div>

                <li className="nav-item mx-3 text-white mt-3 mb-3">
                <a className="nav-link text-white bg-success d-flex align-items-center justify-content-between px-2 py-2" href="/cart" style={{ width: "auto"}}>
                    <div className="d-flex align-items-center">
                    <LiaShoppingCartSolid style={{ fontSize: "1.5em", marginRight: "0.5em" }} /> <span>My <br/> Cart</span>
                    </div>
               
                    <span className="badge bg-light text-dark d-flex justify-content-center align-items-center ms-3"
                     style={{ 
                    borderRadius: "5%",
                    fontSize: "1em",
                    width: "1.5em",
                    height: "1.5em", 
                    fontWeight: "bold"
                }}>0
                </span>
                </a>
                </li>

            </ul>

          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
