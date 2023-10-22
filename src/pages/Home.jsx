import { Fragment, useContext, useEffect } from "react";
import { DataContainer } from "../App";
import SliderHome from "../components/Slider";
import Wrapper from "../components/Wrapper/Wrapper";
import Section from "../components/Section";

const Home = () => {
    const {addToCart} = useContext(DataContainer);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <Fragment>
            <SliderHome />
            <Wrapper />
            <Section title="Big Discount" bgColor="#f6f9fc" addToCart={addToCart} />
        </Fragment>        
    );
}

export default Home;