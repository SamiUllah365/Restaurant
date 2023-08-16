import React from 'react'

const Nav = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-expand-md sticky-top p-relative" style={{backgroundColor: "#f7f6f5"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://chikoo.imgix.net/master-prod-private/bc73a9be-c9d9-4253-bf53-dd46768e1119/profile/1658899623144/1658899623145.png?ixlib=js-3.8.0&dpi=96&s=3df68ba406d3a541c4abfd4d9a6b7113" alt="" 
                        style={{borderRadius: "20px 20px 0px 0px"}} width="48px" height="48px" />
                    </a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target=".navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <button className='navbar-toggler' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExplore" aria-controls="offcanvasWithBothOptions">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="col-5 col-md-5 col-lg-5 search" style={{borderRadius: "75px"}}>
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control" placeholder="Search menu items" />
                        <button className="btn">
                            <img src="right.svg" alt="" />
                        </button>
                    </div>

                    <div className="collapse navbar-collapse navbarNavDropdown" id="">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {
                                    props.counter === 0  &&
                                    <a style={{color: "white"}} className="nav-link cart-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasWithBothOptions" aria-current="page" href="#">
                                    <img src="https://order.taus.pk/static/media/cart.380c09a31a9df5320499819baae9cc12.svg" width="30px" alt="" style={{ marginRight: "5px" }} />
                                    Cart
                                </a>
                                }
                                {
                                    props.counter > 0  &&
                                    <a style={{width: "170px",marginLeft: "400px", color: "white"}}
                                     className="nav-link cart-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasWithBothOptions" aria-current="page" href="#">
                                    <img src="https://order.taus.pk/static/media/cart.380c09a31a9df5320499819baae9cc12.svg" width="30px" alt="" style={{ marginRight: "7px" }} />
                                    {props.counter} <span className="vertical"></span>
                                    <span style={{marginRight: "5px"}}><img src="https://order.taus.pk/static/media/wallet.7c6e69440249d7c028a893e6bba16ac9.svg" alt="" /></span>
                                    <span>Rs. </span>
                                </a>
                                }
                            </li>
                            <li className='navbar-item' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExplore" aria-controls="offcanvasWithBothOptions">
                                <a className='nav-link exp-link' aria-current='page' href="#">
                                    <img src="bar.svg" width="15px" alt="" style={{ marginRight: "5px" }} />
                                    Explore
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav