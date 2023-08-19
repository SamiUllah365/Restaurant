import React from 'react'

const MenuBar = (props) => {

  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const d = new Date();
  let day = weekday[d.getDay()];
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide position-relative">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://imagedelivery.net/EtcVECyqIuOr1FjP12iTCg/0dc41915-f6ed-4afd-65e9-2c46d9ffb600/public" className="d-block w-100" alt="..." />
          </div>
          {props.alert}
        </div>
        {/* Address Bar */}

        <div className="position-absolute bottom-0 start-0 address  rounded-top">

          {/* First Handing */}
          <div className="position-absolute top-0 start-0">
            <div className="img" style={{ margin: "15px", padding: "9px", textAlign: "center", backgroundColor: "#ffa600", borderRadius: "50px", width: "50px", height: "50px" }}>
              <img src="https://order.taus.pk/static/media/hours.1e6c1c22e2d7daa3df0a734763c1a63d.svg" width="30px" height="30px"
                alt="" />
            </div>
          </div>

          <div className="position-absolute top-0 start-0">
            <div className="para" style={{ marginLeft: "75px", marginTop: "20px", padding: "0px", textAlign: "center" }}>
              <span>Opening Hours</span>
              <p>{day} 01:00 pm - 11:30 pm</p>
            </div>
          </div>

          {/* 2nd Handing */}

          <div className="position-relative top-0 start-0">
            <div className="img" style={{ float: "right",marginRight: "510px",marginTop: "15px", padding: "9px", textAlign: "center", backgroundColor: "#ffa600", borderRadius: "50px", width: "50px", height: "50px" }}>
              <img src="https://order.taus.pk/static/media/address.d4c360896cc9dcf92399aa7f38376a76.svg" width="30px" height="30px"
                alt="" />
            </div>
          </div>

          <div className="position-absolute top-0 start-0">
            <div className="para" style={{ marginLeft: "360px", marginTop: "20px", textAlign: "center" }}>
              <span>Address</span>
              <p>Intellectual Village, Spring N...</p>
            </div>
          </div>

          {/* 3rd Handing */}


          <div className="position-absolute top-0 start-0" style={{marginLeft: "500px"}}>
            <div className="img" style={{marginLeft: "90px",marginTop: "15px", padding: "9px", textAlign: "center", backgroundColor: "#ffa600", borderRadius: "50px", width: "50px", height: "50px" }}>
              <img src="https://order.taus.pk/static/media/whatsapp_outline.05dac002c364f08579132e24c65e33d8.svg" width="30px" height="30px"
                alt="" />
            </div>
          </div>

          <div className="position-absolute top-0 end-0">
            <div className="para" style={{ marginRight: "65px", marginTop: "20px", textAlign: "center" }}>
              <span>Contact</span>
              <p>+92330012345678</p>
            </div>
          </div>
        </div>
      </div>


      <nav className='navbar navbar-expand-lg navbar-expand-md navbar-expand-xs'>
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