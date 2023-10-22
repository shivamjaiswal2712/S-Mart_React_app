import { Container, Row } from "react-bootstrap";

const Section = ({ title, bgColor }) => {
    return(
        <section style={{ background: bgColor }}>
            <Container>
                <div className="heading">
                    <h1>{title}</h1>
                </div>
                <Row className="justify-content-center">

                </Row>
            </Container>
        </section>
    );
}

export default Section;