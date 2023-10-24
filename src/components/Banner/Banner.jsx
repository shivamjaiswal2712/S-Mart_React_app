import { Container, Row, Col } from "react-bootstrap";
import productImg01 from  "../../Images/Victorian_Mahogany_Rocking_Arm.jpg";

const Banner = ({title}) => {
    return(
        <div className="image-container">
            <img src={productImg01} alt=""/>
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