import { Fragment, useContext, useEffect, useState } from "react"
import Banner from "../components/Banner/Banner";
import { DataContainer } from "../App";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterSelect from "../components/FilterSelect";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";

const Shop = () => {
    const {addTocart} = useContext(DataContainer);
    const [filterList, setFilterList] = useState(products.filter(item => item.category === "sofa"));
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
                                <FilterSelect setFilterList={setFilterList} />
                            </Col>
                            <Col md={8}>
                                <SearchBar setFilterList={setFilterList} />
                            </Col>
                        </Row>
                    </Container>
                    
                    <Container>
                        <ShopList productItems={filterList} addTocart={addTocart} />
                    </Container>
                </section>
        </Fragment>
    );
}

export default Shop;