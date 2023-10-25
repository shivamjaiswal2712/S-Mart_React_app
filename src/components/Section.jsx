import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";

const Section = ({ title, bgColor, productItems, addToCart }) => {
    return(
        <section style={{ background: bgColor }}>
            <Container>
                <div className="heading">
                    <h1>{title}</h1>
                </div>
                <Row className="justify-content-center">
                    {productItems.map((productItem) => {
                        return(
                            <ProductCard key={productItem.id} title={title} productItem={productItem} addTocart={addToCart} />
                        )
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Section;