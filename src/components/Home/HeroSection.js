import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../images/slider.svg";
import CarouselImgMobile from "../../images/hero_mobile.svg";
import { Box, Button, Typography, Container } from "@mui/material";
import "../../styles/Home/HeroSection.scss";

const HeroSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <Box className="main_slider">
            <Container className="container" sx={{ position: "relative" }}>
                <Typography className="hero_heading poppins" variant="h5" component="div">
                    Get Started Digital Learning
                </Typography>
                <Box className="center">
                    <Typography sx={{ display: { xs: "block", md: "none" } }} className="hero_p poppins" variant="h5" component="div">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                <Slider {...settings} className="slider_img">
                    <Box>
                        <img src={Carousel} className="slider_img_desktop" alt="picture_of_a_lady" />
                        <img src={CarouselImgMobile} className="slider_img_mobile" alt="picture_of_a_lady" />
                    </Box>
                    <Box>
                        <img src={Carousel} className="slider_img_desktop" alt="picture_of_a_lady" />
                        <img src={CarouselImgMobile} className="slider_img_mobile" alt="picture_of_a_lady" />
                    </Box>
                    <Box>
                        <img src={Carousel} className="slider_img_desktop" alt="picture_of_a_lady" />
                        <img src={CarouselImgMobile} className="slider_img_mobile" alt="picture_of_a_lady" />
                    </Box>
                </Slider>
                <Button className="hero_btn poppins" variant="contained">
                    Get Started
                </Button>
            </Container>
        </Box>
    );
};

export default HeroSection;
