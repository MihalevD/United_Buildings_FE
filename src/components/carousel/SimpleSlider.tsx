import React, { useState } from "react";
import Slider from "react-slick";
import { CarouselBlock, ApartType } from "./CarouselBlock";
import { MobileCarouselBlock } from "./MobileCarouselBlock";
import useIsMobile from "../../helper/isMobile";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import BasicBox from "../basic/BasicBox";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const WrapperNext = styled(BasicBox)`
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  @media (max-width: 500px) {
    right: -18%;
  }
`;

const WrapperPrev = styled(BasicBox)`
  position: absolute;
  left: -5%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  @media (max-width: 500px) {
    left: -15%;
  }
`;

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <WrapperNext onClick={onClick}>
      <ChevronRight sx={{ fontSize: "80px" }} />
    </WrapperNext>
  );
};

const CustomPreviousArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <WrapperPrev onClick={onClick}>
      <ChevronLeft sx={{ fontSize: "80px" }} />
    </WrapperPrev>
  );
};

export default function SimpleSlider() {
  const items = useSelector(
    (state: RootState) => state.apartments.adApartments
  );
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
      {items.length > 0 &&
        items.map((item: ApartType, index: React.Key) => {
          return !isMobile ? (
            <CarouselBlock key={index} apartment={item} fullWidth={true} />
          ) : (
            <MobileCarouselBlock key={index} apartment={item} />
          );
        })}
    </Slider>
  );
}
