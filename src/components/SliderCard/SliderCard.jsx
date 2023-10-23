import { Container, Row, Col } from "react-bootstrap";

const SliderCard = ({title, desc, cover}) => {
    return(
        <Container className="box">
            <Row>
                <Col md={6}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <button className="btn btn-primary">Visit Collections</button>
                </Col>
        
                <Col md={6}>
                    <img src={cover} alt="#" />
                </Col>
            </Row>
        </Container>
    );
}

export default SliderCard;