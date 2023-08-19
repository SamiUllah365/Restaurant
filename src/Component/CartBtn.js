import React from 'react'

const CartBtn = (props) => {
    return (
        <>
            <div className="offcanvas offcanvas-end" id="offcanvasCart" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        <img src="https://order.taus.pk/static/media/shopping-cart.1d948932c583709f57addf65be51f497.svg" alt="" /> Your cart
                    </h5>
                    <h5>Total Items : {props.counter} </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body text-center">
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr style={{ backgroundColor: "#f7f6f5" }}>
                                <th style={{ width: "50%" }} >Product Name</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                            {
                                props.counter > 0 &&
                                props.addItem.map(item => (
                                    <>
                                        <tr key={item.Id} style={{fontSize: "20px", marginBottom: "10px"}}>
                                            <td>{item.Title}</td>
                                            <td style={{ borderRadius: "50px" }}>
                                                <a href='#' onClick={() => props.handleRemoveToProduct(item)} style={{float: "left" , marginLeft: "10px"}}>-</a>
                                                {item.Quantity}
                                                <a href='#' onClick={() =>props.handleAddToProduct(item)} style={{float: "right", marginRight: "10px"}}>+</a>
                                            </td>
                                            <td>{item.Pri}</td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                    {
                        props.counter === 0 &&

                        <div className="container" style={{ marginTop: "125px" }}>
                            <img src="https://order.taus.pk/static/media/emptycarticon.a913ed65d485e0cfc7ee82310632bdb6.svg" alt="" />
                            <h2>Your cart is empty.</h2>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default CartBtn