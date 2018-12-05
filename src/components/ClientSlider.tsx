import * as React from 'react'
import C1Img from "Images/c1.png"
import C2Img from "Images/c2.png"
import C3Img from "Images/c3.png"
import C4Img from "Images/c4.png"
import Slider from 'react-slick'

const sliderSettings = {
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  draggable: true,
  focusOnSelect: false,
  speed: 700,
  autoplaySpeed: 4000,
  adaptiveHeight: false,
  centerMode: true,
  centerPadding: '25%',
  slidesToShow: 2,
  fade: false,
  cssEase: 'ease',
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        centerPadding: '0',
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerPadding: '0',
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerPadding: '0',
      }
    }
  ]
}

const ClientSlider: React.SFC = ({ children }) => (
  <Slider {...sliderSettings} className="clients-slider">
    <div className="item">
      <div>
        <img src={C1Img} alt=""/>
      </div>
    </div>
    <div className="item">
      <div>
        <img src={C2Img} alt=""/>
      </div>
    </div>
    <div className="item">
      <div>
        <img src={C3Img} alt=""/>
      </div>
    </div>
    <div className="item">
      <div>
        <img src={C4Img} alt=""/>
      </div>
    </div>
  </Slider>
)

export default ClientSlider