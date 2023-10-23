import React, { useState } from "react";
import Slider from "react-slick";
import { items } from "../../helper/constants";
import { CarouselBlock, CarouselBlockTypes } from "./CarouselBlock";
import { MobileCarouselBlock } from "./MobileCarouselBlock";
import useIsMobile from "../../helper/isMobile";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import BasicBox from "../basic/BasicBox";

const stlyes = {
  position: "absolute" as const,
  right: "-5%",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
};

const stlyes2 = {
  position: "absolute" as const,
  left: "-5%",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
};

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <BasicBox style={stlyes} onClick={onClick}>
      <ChevronRight sx={{ fontSize: "80px" }} />
    </BasicBox>
  );
};

const CustomPreviousArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <BasicBox style={stlyes2} onClick={onClick}>
      <ChevronLeft sx={{ fontSize: "80px" }} />
    </BasicBox>
  );
};

export default function SimpleSlider() {
  const [carouselData, setCarouselData] = useState<CarouselBlockTypes[]>(items);
  const isMobile = useIsMobile();
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3, // Show 3 items at once
    slidesToScroll: 3, // Scroll 3 items at a time
    accessiblity: true,
    variableWidth: false,
    prevArrow: <CustomPreviousArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {carouselData.map((item, index) => {
        return !isMobile ? (
          <CarouselBlock key={index} {...item} fullWidth={true} />
        ) : (
          <MobileCarouselBlock key={index} {...item} />
        );
      })}
    </Slider>
  );
}
