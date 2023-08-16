import React from 'react'

const MenuBar = () => {

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://imagedelivery.net/EtcVECyqIuOr1FjP12iTCg/0dc41915-f6ed-4afd-65e9-2c46d9ffb600/public" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>


      <nav className='navbar navbar-expand-lg navbar-expand-md p-absolute'>
        <div className="container-fluid mt-3 " style={{ backgroundColor: "#f7f6f5" }}>
          <ul className="nav nav-underline menu-bar stick-top">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <img src="https://order.taus.pk/static/media/category_drawer_icon.da7fe4cbea3af87234c7c87e7357a6c8.svg" width="40px" height="15px" alt=""
                  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#APPETIZINGDEALS">APPETIZING DEALS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#DEALS">DEALS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#BARBEQUE">BARBEQUE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#SPECIAL'>SPECIAL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#ROLL&BREADS'>ROLL & BREADS</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-3" style={{ backgroundColor: "#f7f6f5", borderRadius: "10px", padding: "25px", textAlign: "center" }}>
        <img src="loc.svg" width="30px" height="30px" alt="" />
        <span>Pickup From: <b> Tau's Rawalpindi </b></span>
      </div>
    </>
  )
}

export default MenuBar