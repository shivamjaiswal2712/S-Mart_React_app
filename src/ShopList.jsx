import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Product from "./components/Product/Product";

const ShopList = ({productItems, addTocart}) => {
    useEffect(() => {
    }, [productItems])
    if(productItems.length === 0) {
        return(
            <h1 className="not-found">Product Not Found !!</h1>
        );
    }
    else{
        return(
            <Row className="justify-content-center">
                {productItems.map((productItem) => {
                    return(
                        <Product key={productItem.id} title={null} productItem={productItem} addTocart={addTocart} />
                    )
                })}
            </Row>
        );
    }
}

export default ShopList;