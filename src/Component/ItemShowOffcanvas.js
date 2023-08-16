import React from 'react'

const ItemShowOffcanvas = (props) => {
    return (
        <>
            <div className="offcanvas offcanvas-end" tabindex="0" id="ItemShowOffcanvas" aria- labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body text-center">
                    
                    <img src={props.showItem.src} alt="" width="250px" height="150px" />
                    <div className="container d-flex mt-4 ">
                        <span><h4>{props.showItem.Title}</h4></span>
                        <span style={{ marginLeft: "90px" }}><h4>Rs. {props.showItem.Pri}</h4></span>
                    </div>
                    <hr />
                    <div className="container">
                        <h5> Special instructions </h5>
                        <p>  Any specific preferences? Let us know.</p>
                        <input className='inputI' type="text" style={{ width: "350px", height: "60px", padding: "5px", borderRadius: "10px" }} placeholder='Add Special instruction here' />
                    </div>
                </div>
                <div className="container-fluid">
                    <span><button style={{ width: "30px", height: "30px", color: "white", backgroundColor: "#ffa600", borderColor: "#ffa600", borderRadius: "20px", padding: "2px", marginLeft: "15px" }}>-</button></span>
                    <span style={{ marginLeft: "15px" }}>{props.showItem.Quantity}</span>
                    <span><button style={{ width: "30px", height: "30px", color: "white", backgroundColor: "#ffa600", borderColor: "#ffa600", borderRadius: "20px", padding: "2px", marginLeft: "15px" }}>+</button></span>
                    <button className='addToCart' onClick={() => (props.addToCart(props.showItem))}
                        style={{ float: "right", backgroundColor: "#ffa600", borderColor: "#ffa600", width: "200px", height: "40px", color: "white" }}>Add To Cart
                        <img style={{ marginLeft: "10px" }} src="https://order.taus.pk/static/media/arrow-left.28c7f59e5690d0e7862cdd3d2e625133.svg" alt="" />
                    </button>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemShowOffcanvas