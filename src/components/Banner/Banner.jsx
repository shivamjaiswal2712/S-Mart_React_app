import { Container, Row, Col } from "react-bootstrap";

const Banner = ({title}) => {
    return(
        <div className="image-container">
            <img src="" alt=""/>
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