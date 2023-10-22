import { Container } from "react-bootstrap";
import SliderCard from "./SliderCard/SliderCard";
import Slider from "react-slick";
// import "slick-carousel/slick/Slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderHome = () => {
    const settings ={
        nav: false,
        infinite: true,
        sliderToShow: 1,
        autoplay: true, 
    }

    return (
        <section className="homeslider">
            <Container>
                <Slider {...settings}>
                    <SliderCard  />            
                </Slider>
            </Container>
        </section>
    );
}

export default SliderHome;