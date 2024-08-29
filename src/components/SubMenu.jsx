import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SubMenu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActiveSubMenu(menu);
    if (menu === 'allCategories') {
      setShowAllCategories(true);
    }
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setActiveSubMenu(null);
      setShowAllCategories(false);
    }, 500);
  };

  return (
    <div style={{ position: 'relative' }}>
      <nav className="sticky-top">
        <nav
          className="navbar navbar-dark py-0 fixed-navbar"
          style={{ minHeight: "40px", zIndex: "1000", backgroundColor: "#94004f" }}
        >
          <div className="row w-100">
            <div className="container-fluid d-flex align-items-center">
              <button
                className="navbar-toggler mx-2 text-white"
                type="button"
                style={{ fontSize: "0.885rem", backgroundColor: "transparent", border: "none", boxShadow: "none" }}
                onMouseEnter={() => handleMouseEnter('allCategories')}
                onMouseLeave={handleMouseLeave}
              >
                All Categories<span className="navbar-toggler-icon mx-2"></span>
              </button>

              <nav className="d-flex">
                <a className="nav-link nav-link-hover text-white" href="#computer" onMouseEnter={() => handleMouseEnter('computer1')} onMouseLeave={handleMouseLeave}>Computer and Accessories</a>
                <a className="nav-link nav-link-hover text-white mx-2 fs-6 small" href="#phone" onMouseEnter={() => handleMouseEnter('phones1')} onMouseLeave={handleMouseLeave}>Phones and Tablets</a>
                <a className="nav-link nav-link-hover text-white mx-2 fs-6 small" href="#electronics" onMouseEnter={() => handleMouseEnter('electronics1')} onMouseLeave={handleMouseLeave}>Electronics</a>
                <a className="nav-link nav-link-hover text-white mx-2 fs-6 small" href="#fashion" onMouseEnter={() => handleMouseEnter('fashion1')} onMouseLeave={handleMouseLeave}>Konga Fashion</a>
                <a className="nav-link nav-link-hover text-white mx-2 fs-6 small" href="#kitchen" onMouseEnter={() => handleMouseEnter('kitchen1')} onMouseLeave={handleMouseLeave}>Home and Kitchen</a>
                <a className="nav-link nav-link-hover text-white mx-2 fs-6 small" href="#baby" onMouseEnter={() => handleMouseEnter('kids1')} onMouseLeave={handleMouseLeave}>Baby, Kids and Toys</a>
              </nav>
            </div>
          </div>
        </nav>
      </nav>

      {/* All Categories Submenu - Vertical Display */}
      {showAllCategories && (
        <div className="bg-white p-2 mb-5" style={{ width: '100%', zIndex: 1050, position: 'absolute', top: '40px'}}>
            <ul className="show p-3" style={{ width: '19rem' }}>
                <a className="nav-link-custom" href="#computer" onMouseEnter={() => handleMouseEnter('computer')} onMouseLeave={handleMouseLeave}>Computer and Accessories<br></br><br></br></a>
                <a className="nav-link-custom" href="#phone" onMouseEnter={() => handleMouseEnter('phones')} onMouseLeave={handleMouseLeave}>Phones and Tablets<br></br><br></br></a>
                <a className="nav-link-custom" href="#electronics" onMouseEnter={() => handleMouseEnter('electronics')} onMouseLeave={handleMouseLeave}>Electronics<br></br><br></br></a>
                <a className="nav-link-custom" href="#fashion" onMouseEnter={() => handleMouseEnter('fashion')} onMouseLeave={handleMouseLeave}>Konga Fashion<br></br><br></br></a>
                <a className="nav-link-custom" href="#kitchen" onMouseEnter={() => handleMouseEnter('kitchen')} onMouseLeave={handleMouseLeave}>Home and Kitchen<br></br><br></br></a>
                <a className="nav-link-custom" href="#baby" onMouseEnter={() => handleMouseEnter('kids')} onMouseLeave={handleMouseLeave}>Baby, Kids and Toys<br></br><br></br></a>
                <a className="nav-link-custom" href="#beauty" onMouseEnter={() => handleMouseEnter('beauty')} onMouseLeave={handleMouseLeave}>Beauty, Health & Personal Care<br></br><br></br></a>
                <a className="nav-link-custom" href="#drinks" onMouseEnter={() => handleMouseEnter('drinks')} onMouseLeave={handleMouseLeave}>Drinks and Groceries<br></br><br></br></a>
                <a className="nav-link-custom" href="#other" onMouseEnter={() => handleMouseEnter('other')} onMouseLeave={handleMouseLeave}>Other Categories</a>
            </ul>
        </div>
      )}

                {/* Computers and Accessories submenu */}
        <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'computer' ?      'd-block' : 'd-none'}`} style={{ width: '78vw', left: 267, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('computer')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                <div className="col-md-3 mx-1 my-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Laptops</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Mini Laptops and Netbooks</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Notebooks</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Ultrabooks</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hybrid PCs</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Macbooks</a>
                </div>
                <div className="col-md-3 mx-5 my-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Desktop and Monitors</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">CPUs</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">All In Ones</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Monitors</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">UPS</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Servers</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Desktop Bundles</a>
                </div>

                <div className="col-md-3 mx-5 my-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Computing Accessories</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Computer Peripherals</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bags,Cases, Covers & Sleeves</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Laptop & Desktop Accessories</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Storage Devices</a>
                </div>
            </div>

            <div className="row mx-3">
                <div className="mt-4 col-md-3 mx-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Printers, Scanners & Accessories</a>
                     <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Printers</a>
                     <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Scanners</a>
                     <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Inks, Toners & Crtridges</a>
                </div>

                <div className="mt-4 col-md-3 mx-5 my-1">
                      <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Wifi & Networking</a>
                      <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Switches</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Routers</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Moderms</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Networking Peripherals</a>
                  </div>

                <div className="mt-4 col-md-3 mx-5 my-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">PC Gaming</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">PC Games</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">PC Gaming Accessories</a>
                </div>
            </div>

            <div className="row mx-3">
                <div className="mt-4 col-md-3 mx-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Software</a>
                </div>

                <div className="mt-4 col-md-3 mx-5 my-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Projectors & Accessories</a>
                </div>
            </div>

        </div>

        {/* Computers and Accessories1 submenu */}
        <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'computer1' ?      'd-block' : 'd-none'}`} style={{ width: '100%', left: -30, top: '40px', zIndex: 1100  }} onMouseEnter={() => handleMouseEnter('computer1')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                <div className="col-md-3 mx-1 my-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Laptops</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Mini Laptops and Netbooks</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Notebooks</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Ultrabooks</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hybrid PCs</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Macbooks</a>
                </div>
                <div className="col-md-3 mx-5 my-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Desktop and Monitors</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">CPUs</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">All In Ones</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Monitors</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">UPS</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Servers</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Desktop Bundles</a>
                </div>

                <div className="col-md-3 mx-5 my-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Computing Accessories</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Computer Peripherals</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bags,Cases, Covers & Sleeves</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Laptop & Desktop Accessories</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Storage Devices</a>
                </div>
            </div>

            <div className="row mx-3">
                <div className="mt-4 col-md-3 mx-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Printers, Scanners & Accessories</a>
                     <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Printers</a>
                     <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Scanners</a>
                     <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Inks, Toners & Crtridges</a>
                </div>

                <div className="mt-4 col-md-3 mx-5 my-1">
                      <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Wifi & Networking</a>
                      <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Switches</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Routers</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Moderms</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Networking Peripherals</a>
                  </div>

                <div className="mt-4 col-md-3 mx-5 my-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">PC Gaming</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">PC Games</a>
                    <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">PC Gaming Accessories</a>
                </div>
            </div>

            <div className="row mx-3">
                <div className="mt-4 col-md-3 mx-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Software</a>
                </div>

                <div className="mt-4 col-md-3 mx-5 my-1">
                    <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Projectors & Accessories</a>
                </div>
            </div>

        </div>
                        
                        

                    {/* Phones and Tablets Submenu */}
        <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'phones' ?      'd-block' : 'd-none'}`} style={{ width: '78vw', left: 267, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('phones')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Mobile Phones</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Smartphones</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Feature Phones</a>
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Mobile Phone Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cables</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cases & Covers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Screen Protectors</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Chargers & Power Banks</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Earphones & Headsets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Smartwatches & Stands</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Clips, Holders & Bands</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Batteries</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Tablets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Android</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">iOS</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Windows</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Other OS'</a>
                        </div>
            </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Tablet Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cables & Covers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Holders & Stands</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Others Accessories</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Shop By Price</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Up to 10,000</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Up to 20,000</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Up to 30,000</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Desk, Radio & Intercom Phones</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Other Brands</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Desk, Radio & Intercom Phones Accessories</a>
                        </div>
                    </div>

                        
                </div>

                {/* Phones and Tablets1 Submenu */}
        <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'phones1' ?      'd-block' : 'd-none'}`} style={{ width: '100%', left: -30, top: '40px', zIndex: 1100  }} onMouseEnter={() => handleMouseEnter('phones1')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Mobile Phones</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Smartphones</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Feature Phones</a>
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Mobile Phone Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cables</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cases & Covers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Screen Protectors</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Chargers & Power Banks</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Earphones & Headsets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Smartwatches & Stands</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Clips, Holders & Bands</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Batteries</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Tablets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Android</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">iOS</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Windows</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Other OS'</a>
                        </div>
            </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Tablet Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cables & Covers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Holders & Stands</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Others Accessories</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Shop By Price</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Up to 10,000</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Up to 20,000</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Up to 30,000</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Desk, Radio & Intercom Phones</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Other Brands</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Desk, Radio & Intercom Phones Accessories</a>
                        </div>
                    </div>

                        
                </div>


                    {/* Electronics Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'electronics' ?  'd-block' : 'd-none'}`} style={{ width: '78vw', left: 267, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('electronics')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Televisions</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Smart TVs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">LED TVs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Curved TVs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">OLED TVs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Plasma TVs</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">DVD Players and Recorders</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">DVD Players</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">DVD Recorders</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Cameras</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Digital Cameras</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Prossional & SLR Cameras</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Camcoders & Video Cameras</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Camera Lenses & Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">CCTV Cameras</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">TV Audio</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Headphones</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Television Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Other Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Gaming Accessories</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Home Theatres & Audio Systems</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Home Theatre</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">HiFi Systems</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">MP3 Players & Speakers</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Games and Consoles</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">PS4</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">PS3</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Xbox One</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Xbox 360</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Nintendo Wii</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sony PSP</a>
                        </div>
                    </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Software</a>
                        </div>
                  

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Projectors & Accessories</a>
                        </div>
                    </div>
                        
                </div>

                {/* Electronics1 Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'electronics1' ?  'd-block' : 'd-none'}`} style={{ width: '100%', left: -30, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('electronics1')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Televisions</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Smart TVs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">LED TVs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Curved TVs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">OLED TVs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Plasma TVs</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">DVD Players and Recorders</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">DVD Players</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">DVD Recorders</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Cameras</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Digital Cameras</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Prossional & SLR Cameras</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Camcoders & Video Cameras</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Camera Lenses & Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">CCTV Cameras</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">TV Audio</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Headphones</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Television Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Other Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Gaming Accessories</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Home Theatres & Audio Systems</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Home Theatre</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">HiFi Systems</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">MP3 Players & Speakers</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Games and Consoles</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">PS4</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">PS3</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Xbox One</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Xbox 360</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Nintendo Wii</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sony PSP</a>
                        </div>
                    </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Software</a>
                        </div>
                  

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Projectors & Accessories</a>
                        </div>
                    </div>
                        
                </div>

                    {/* Konga Fashion Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'fashion' ?      'd-block' : 'd-none'}`} style={{ width: '78vw', left: 267, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('fashion')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Women's Wear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Dresses</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Tops</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Trousers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Jumpsuits & Playsuits</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Suits & Blazers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Skirts</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Co-ordinates</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Lingerie & Sleepwear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Ready to wear</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Women's Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Ballerinas & Flats</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Heels</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sandals & Slippers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Wedges</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sport Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Shoes & Bags</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Women's Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bags</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Belts</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Purses & Clutches</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Wallets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Jewellery</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hats & Scarves</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Men's Wear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Shirts</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Polos</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Men's Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Casual Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Formal Shoes</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Men's Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Belts & Wallets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Socks & Underwear</a>
                        </div>
                    </div>
                        
                </div>

                {/* Konga Fashion Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'fashion1' ?      'd-block' : 'd-none'}`} style={{ width: '100%', left: -30, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('fashion1')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Women's Wear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Dresses</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Tops</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Trousers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Jumpsuits & Playsuits</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Suits & Blazers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Skirts</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Co-ordinates</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Lingerie & Sleepwear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Ready to wear</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Women's Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Ballerinas & Flats</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Heels</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sandals & Slippers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Wedges</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sport Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Shoes & Bags</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Women's Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bags</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Belts</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Purses & Clutches</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Wallets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Jewellery</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hats & Scarves</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Men's Wear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Shirts</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Polos</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Men's Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Casual Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Formal Shoes</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Men's Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Belts & Wallets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Socks & Underwear</a>
                        </div>
                    </div>
                        
                </div>

                    {/* Home and Kitchen Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'kitchen' ?      'd-block' : 'd-none'}`} style={{ width: '78vw', left: 267, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('kitchen')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Large Appliances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Air Conditioners & Coolers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Fans</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Freezers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Washers & Dryers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Refrigerators</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cookers & Ovens</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Water Dispensers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Vacuum Cleaners</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Small Appliances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Blenders, Juices & Mixers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hot Plates & Burners</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Iron & Steamers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Processors & Mincers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Toasters & Sandwich Makers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Deep Fryers & Rice Cookers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Electric Kettles</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Microwaves</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Yam Pounder</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Home Furnishings</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bed & Bathroom Furnishings</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Curtains & Blinds</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Decor</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Light Fixtures</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Rugs & Carpets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Housekeeping & Pet Supplies</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Kitchen & Dining</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cook and Bakeware</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Dining</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Top Brands</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">LG</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Samsung</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Kids' Home Store</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">kids Bath</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Kids Bedding</a>
                        </div>
                    </div>
                        
                </div>

                        {/* Baby, Kids and Toys Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'kids' ?      'd-block' : 'd-none'}`} style={{ width: '78vw', left: 267, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('kids')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Fashion for Girls</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Dresses</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Tops, Jackets, & Sweatshirts</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Denim, Trousers & Leggings</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Underwear & Socks</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Watches</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sleepwear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bodysuits & Playsuits</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Fashion for Boys</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Polos & T-Shirts</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Watches</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Denim & Trousers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bodysuits & Playsuits</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sleepwear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Underwear & Socks</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Shirts</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Baby Essentials</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bibs & Burp Cloths</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bottle Feeding</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Breastfeeding</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Pacifiers & Teethers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Baby Food & Formula</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Feeding & Nursing</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Maternity</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Maternity Tops & Jackets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Maternity Dresses</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">School Store</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bags & Backpacks</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Lunchboxes & Waterbottles</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Travel & Safety Gear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Car Seats, Strollers & Carriers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Baby Monitors & Safety Gates</a>
                        </div>
                    </div>
                        
                </div>

                {/* Home and Kitchen Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'kitchen1' ?      'd-block' : 'd-none'}`} style={{ width: '100%', left: -30, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('kitchen1')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Large Appliances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Air Conditioners & Coolers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Fans</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Freezers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Washers & Dryers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Refrigerators</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cookers & Ovens</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Water Dispensers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Vacuum Cleaners</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Small Appliances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Blenders, Juices & Mixers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hot Plates & Burners</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Iron & Steamers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Processors & Mincers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Toasters & Sandwich Makers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Deep Fryers & Rice Cookers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Electric Kettles</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Microwaves</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Yam Pounder</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Home Furnishings</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bed & Bathroom Furnishings</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Curtains & Blinds</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Decor</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Light Fixtures</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Rugs & Carpets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Housekeeping & Pet Supplies</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Kitchen & Dining</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cook and Bakeware</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Dining</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Top Brands</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">LG</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Samsung</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Kids' Home Store</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">kids Bath</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Kids Bedding</a>
                        </div>
                    </div>
                        
                </div>

                        {/* Baby, Kids and Toys Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'kids1' ?      'd-block' : 'd-none'}`} style={{ width: '100%', left: -30, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('kids1')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Fashion for Girls</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Dresses</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Tops, Jackets, & Sweatshirts</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Denim, Trousers & Leggings</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Underwear & Socks</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Watches</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sleepwear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bodysuits & Playsuits</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Fashion for Boys</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Polos & T-Shirts</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Watches</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Denim & Trousers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bodysuits & Playsuits</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sleepwear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Underwear & Socks</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Shoes</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Shirts</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Baby Essentials</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bibs & Burp Cloths</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bottle Feeding</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Breastfeeding</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Pacifiers & Teethers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Baby Food & Formula</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Feeding & Nursing</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Maternity</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Maternity Tops & Jackets</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Maternity Dresses</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">School Store</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Bags & Backpacks</a><a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Lunchboxes & Waterbottles</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Travel & Safety Gear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Car Seats, Strollers & Carriers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Baby Monitors & Safety Gates</a>
                        </div>
                    </div>
                        
                </div>
                
            
                {/* Beauty, Health & Personal Care Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'beauty' ?      'd-block' : 'd-none'}`} style={{ width: '78vw', left: 267, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('beauty')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Makeup</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Face MakeUp</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Eye MakeUp</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Lips</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Makeup Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Nails</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Makeup Set</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Body Art</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Fragrances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Men's Frangrances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Women's Fragrances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Unisex Fragrances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Children's Fragrances</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Hair Centre</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hair Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hair Care and Treatment</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Extensions, Weaves and Wigs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Salon Essential</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hair Appliances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Natural Hair Products</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Personal Care</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Skin Care </a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Oral & Dental  Care</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Feminine Care</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Message Tools & Equipment</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Skin Care</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Deodorants and Antiperspirants</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Face & Body Scrubs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Wash & Cleasers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Body Creams, Lotions & Oils</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Sexual Wellness</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Adult Toys</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Condoms & Lubricants</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Enlargement, Delay & Tightening Products</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sexual Pleasure Enhancing &</a>
                        </div>
                    </div>
                        
                </div>

                {/* Beauty, Health & Personal Care Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'beauty1' ?      'd-block' : 'd-none'}`} style={{ width: '100%', left: 267, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('beauty1')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Makeup</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Face MakeUp</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Eye MakeUp</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Lips</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Makeup Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Nails</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Makeup Set</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Body Art</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Fragrances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Men's Frangrances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Women's Fragrances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Unisex Fragrances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Children's Fragrances</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Hair Centre</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hair Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hair Care and Treatment</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Extensions, Weaves and Wigs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Salon Essential</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Hair Appliances</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Natural Hair Products</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Personal Care</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Skin Care </a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Oral & Dental  Care</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Feminine Care</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Message Tools & Equipment</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Skin Care</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Deodorants and Antiperspirants</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Face & Body Scrubs</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Wash & Cleasers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Body Creams, Lotions & Oils</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Sexual Wellness</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Adult Toys</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Condoms & Lubricants</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Enlargement, Delay & Tightening Products</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sexual Pleasure Enhancing &</a>
                        </div>
                    </div>
                        
                </div>
                

                        {/* Drinks & Groceries Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'drinks' ?      'd-block' : 'd-none'}`} style={{ width: '78vw', left: 267, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('drinks')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Foods</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Breakfast & Cereals</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Rice, Pasta & Noodles</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Flour & Grains</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Cooking Ingredients</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Baking Ingredients</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Snacks & Confectioneries</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Smoked Meat & Fish</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Agric Products</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Meat, Poultry & Fish</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Fruits & Vegetables</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Seafood</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Livestock</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Flowers</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Animal Feed</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Agricultural Tools & Accessories</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Alcoholic Beverages</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Wine</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Spirits</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Liqueurs & Creams</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Champagne</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Beer</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Coolers & Cocktails</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Beverages</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Tea</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Coffee</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Dairy, Eggs & Cheese</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Processed Foods</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Fruit Juices & Drinks</a>
                        </div>
                    </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Drinks & Groceries Bundle</a>
                        </div>
                  

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Energy Drinks</a>
                        </div>
                    </div>
                        
                </div>

                    {/* Other Categories Submenu */}
            <div className={`submenu position-absolute bg-white p-2 my-0 ${activeSubMenu === 'other' ?      'd-block' : 'd-none'}`} style={{ width: '78vw', left: 267, top: '40px', zIndex: 1100 }} onMouseEnter={() => handleMouseEnter('other')} onMouseLeave={handleMouseLeave}>
            <div className="row mx-3">
                        <div className="col-md-3 mx-1 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#" > Sports and Fitness</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Fitness</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Outdoor & Indoor Games</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Sportswear</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Football</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Swimming</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Boxing</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Basketball</a>
                            
                        </div>
                        
                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Books & Media Library</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Books</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Musical Equipment</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Keyboard, Piano & Drums</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Stage, Studio & Recording Equipment</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Wind Instruments</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">String Instruments</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Audio Books</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">African Tales</a>
                        </div>

                        <div className="col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Alcoholic Beverages</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Wines</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Spirits</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Liqueurs & Creams</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Whiskey</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Champagne</a>
                        </div>
                        </div>

                    <div className="row mx-3">
                        <div className="mt-4 col-md-3 mx-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Office & School Supplies</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Greeting Cards</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">School Supplies</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Office Supplies</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Generators & Power Solutions</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Generators & Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Inverters</a>
                        </div>

                        <div className="mt-4 col-md-3 mx-5 my-1">
                            <a className="d-block custom-hover-link text-decoration-none text-black fw-bold" href="#">Automotive</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Automotive Tools & Accessories</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Safety and Security</a>
                            <a className="d-block custom-hover-link text-decoration-none text-black mt-2 small" href="#">Autocare & Maintenance</a>
                        </div>
                    </div>
                    
                </div>
                
    </div>
  )
}

export default SubMenu