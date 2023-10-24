import { useContext, useEffect } from "react";
import { DataContainer } from "../App";
import { Container, Row, Col } from "react-bootstrap";

const Cart = () => {
    const { cartItem, setCartItem, addToCart, decreaseQty, deleteProduct } = useContext(DataContainer);
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0);

    useEffect(() => {
        window.scrollTo(0, 0);
        if(cartItem.length === 0) {
            const storedCart = localStorage.getItem("cartItem");
            setCartItem(JSON.parse(storedCart));
        }
    },[])

    return(
        <section className="cart-items">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        {cartItem.length === 0 && <h1 className="no-items product">No Items are add in Cart</h1>}
                        {cartItem.map((item) => {
                            const productQty = item.price * item.qty
                            return(
                                <div key={item.id} className="card-list">
                                    <Row>
                                        <Col className="image-holder" sm={4} md={3}>
                                            <img src={item.imgUrl} alt="" />
                                        </Col>

                                        <Col sm={8} md={9}>
                                            <Row className="cart-content justify-content-center">
                                                <Col xs={12} sm={9} className="cart-details">
                                                    <h3>{item.productName}</h3>
                                                    <h4>
                                                        ${item.price}.00 * {item.qty}
                                                        <span>${productQty}.00</span>
                                                    </h4>
                                                </Col>

                                                <Col xs={12} sm={3} className="cartControl">
                                                    <button className="incCart" onClick={() => addToCart(item)}>
                                                        <i className="fa-solid fa-plus"/>
                                                    </button>
                                                    <button className="decCart" onClick={() => decreaseQty(item)}>
                                                        <i className="fa-solid fa-minus"/>
                                                    </button>
                                                </Col>
                                            </Row>
                                        </Col> 

                                        <button className="delete" onClick={() => deleteProduct(item)}>
                                            <ion-icon name="close"/>
                                        </button>
                                    </Row>
                                </div>
                            )
                        })}
                    </Col>

                    <Col md={4}>
                        <div className="cart-total">
                            <h2>Cart Summary</h2>
                            <div className="d_flex">
                                <h4>Total Price :</h4>
                                <h3>${totalPrice}.00</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Cart;