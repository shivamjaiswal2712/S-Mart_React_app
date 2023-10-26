import { Col, Container, Row } from "react-bootstrap";
import productImg06 from "../../Images/arm-chair-03.jpg";
import "./banner.css";

const Banner = ({title}) => {
    return ( 
        <div className="image-container">
            <img src={productImg06} alt="Product-bg" />
            <div className="overlay">
                <Container>
                    <Row>
                        <Col>
                            <h2>{title}</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Banner;