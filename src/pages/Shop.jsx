import { Fragment, useContext, useEffect } from "react"
import Banner from "../components/Banner/Banner";
import React from "react";
import { DataContainer } from "../App";
import { Container, Row, Col } from "react-bootstrap";

const Shop = () => {
    const {addTocart} = useContext(DataContainer);
    // const [filter, setFilter] = useState(product.filter(item => item.category === "sofa"));
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return(
        <Fragment>
            <Banner title="product" />
                <section className="filter-bar">
                    <Container className="filter-bar-container">
                        <Row className="justify-content-center">
                            <Col md={4}>
                            </Col>

                        </Row>
                    </Container>
                </section>
        </Fragment>
    );
}

export default Shop;