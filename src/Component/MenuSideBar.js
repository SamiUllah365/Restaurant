import React from 'react'

const MenuSideBar = () => {
    return (
        <>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header text-center">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel" >
                        <img src="https://order.taus.pk/static/media/category_drawer_icon.da7fe4cbea3af87234c7c87e7357a6c8.svg" width="40px" height="22px" alt="" />
                        Menu
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p><a className="nav-link" aria-current="page" href="#APPETIZINGDEALS">APPETIZING DEALS</a></p>
                    <p><a className="nav-link" aria-current="page" href="#DEALS">DEALS</a></p>
                    <p><a className="nav-link" aria-current="page" href="#BARBEQUE">BARBEQUE</a></p>
                    <p><a className="nav-link" aria-current="page" href="#SPECIAL">SPECIAL</a></p>
                    <p><a className="nav-link" aria-current="page" href="#ROLL&BREADS">ROLL & BREADS</a></p>
                </div>
            </div>
        </>
    )
}

export default MenuSideBar