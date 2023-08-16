import React from 'react'
import data from '../Data/Menu.json'

const MainMenuItems = (props) => {
    return (
        <>
            <div className="container mt-3">
                {
                    data.map(category => (
                        <>
                            <h2 id={category.targetCategory} className='main-page'>{category.category}</h2>
                            <span className="dived"></span>
                            <div className="row row-cols-2  row-cols-md-4 g-5 ">
                                {
                                    category.MenuItem.map(items => (
                                        <div key={items.Id} className="mb-3 card-group card-detail col-lg-4 col-md-4 col-6"
                                            data-bs-toggle="offcanvas" data-bs-target="#ItemShowOffcanvas" aria-controls="offcanvasWithBothOptions">
                                            <div className="card p-1" onClick={() =>props.openDetail(items)}>
                                                <div className="card-body">
                                                    <h5 className="card-title">{items.Title}</h5>
                                                    {/* <a href="#"> */}
                                                    <img src={items.src} className="card-img-top" alt="..." />
                                                    {/* </a> */}
                                                    <p className="card-text">{items.Drs}</p>
                                                </div>
                                                <div className="card-foot">
                                                    <h5 className="card-text">Rs {items.Pri}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </>
                    ))
                }
            </div>
        </>
    )
}

export default MainMenuItems