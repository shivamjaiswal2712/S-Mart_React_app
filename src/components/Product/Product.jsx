import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  DataContainer } from "../../App";
import { toast } from "react-toastify";
import { Col } from "react-bootstrap";

const Product = ({title, productItem, addTocart}) => {
    const {setselectedProduct} = useContext(DataContainer);
    const router = useNavigate();
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    const handleClick = () => {
        setselectedProduct(productItem);
        localStorage.setItem(`selectProduct-${productItem.id}`,JSON.stringify(productItem));
        router(`/shop/${productItem.id}`);
    }

    const handleAdd = (productItem) => {
        addTocart(productItem);
        toast.success("Product has been added to cart!");
    }

    return(
        <Col md={5} xs={10} className="product mtop">
            {title === "Big Discount"? <span className="discount">{productItem.discount}% off</span>: null}
            <img loading="lazy" onClick={() => handleClick()} src="" alt="" />
            <div className="product-like">
                <label>{count}</label> <br />
                <ion-icon name="heart-outline" onClick={increment} />
            </div>

            <div className="product-details">
                <h3 onClick={handleClick()}>
                    {productItem.productName}
                </h3>
                <div className="rate">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                </div>

                <div className="price">
                    <h4>${productItem.price}</h4>
                    <button aria-label="Add" type="submit" className="add" onClick={() => handleAdd(productItem)}>
                        <ion-icon name="add" />
                    </button>
                </div>
            </div>
        </Col>
    );
}

export default Product;