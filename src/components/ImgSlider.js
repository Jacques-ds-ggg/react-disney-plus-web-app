import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'                // npm install react-slick --save
import "slick-carousel/slick/slick.css";        // npm install slick-carousel
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    let settings = {                            // Set settings for the slider
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        // transfer all the setting to the carousel div
        <Carousel {...settings}>             
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" />
            </Wrap>
        </Carousel> 
   
    )
}
export default ImgSlider

const Carousel = styled(Slider)`                // Set the slider here to style myself
    margin-top: 20px;

    ul li button {                              // slider button below
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {            // target css slick-active on button
        color: white;                           // overwrite the default color
    }

    .slick-list{
        overflow: visible;                      // See the next item in slider
        
    }

    button {
        z-index: 1;                             // return arrow on left
    }

`
const Wrap = styled.div`
cursor: pointer;
    img{
        border: 4px solid transparent;
        border-radius: 4px;                     // Curves the image border
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 8px 26px 38px -10px,
        rgb(0 0 0 / 73%) 8px 16px 18px -10px;   // box-shadow styling
        transition-duration: 300ms;             // slow border change

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);    // on hover color the border
        }
    }
`