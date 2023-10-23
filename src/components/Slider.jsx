import { Container } from "react-bootstrap";
import SliderCard from "./SliderCard/SliderCard";
import Slider from "react-slick";
// import "slick-carousel/slick/Slick.css"
import "slick-carousel/slick/slick-theme.css"
import { SliderData } from "../utils/products";

const SliderHome = () => {
    const settings ={
        nav: false,
        infinite: true,
        sliderToShow: 1,
        sliderToScroll: 1,
        autoplay: true, 
    }

    return (
        <section className="homeslider">
            <Container>
                <Slider {...settings}>
                    {SliderData.map((value, index) => {
                        return(<SliderCard key={index} title={value.title} cover={value.cover} desc={value.desc} />
                    )
                })}           
                </Slider>
            </Container>
        </section>
    );
}

export default SliderHome;