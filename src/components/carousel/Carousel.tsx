import React, { useState } from "react";
import BasicBox from "../basic/BasicBox";
import { CarouselBlock, CarouselBlockTypes } from "./CarouselBlock";
import apart from "../../img/ap.jpg";
import { items } from "../../helper/constants";
import styled from "@emotion/styled";
import useIsMobile from "../../helper/isMobile";
import { MobileCarouselBlock } from "./MobileCarouselBlock";

const CarouselWrapper = styled(BasicBox)`
  width: 100%;
  display: flex;
  transition: transform 0.5s;
`;

const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const CarouselLeftArrow = styled(CarouselArrow)`
  left: -10%;
`;

const CarouselRightArrow = styled(CarouselArrow)`
  right: -10%;
`;

export const Carousel = () => {
  const [carouselData, setCarouselData] = useState<CarouselBlockTypes[]>(items);
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < carouselData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <CarouselWrapper
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselData.map((item, index) => {
          return !isMobile ? (
            <CarouselBlock key={index} {...item} />
          ) : (
            <MobileCarouselBlock key={index} {...item} />
          );
        })}
      </CarouselWrapper>
      <CarouselLeftArrow onClick={prevSlide}>{"<"}</CarouselLeftArrow>
      <CarouselRightArrow onClick={nextSlide}>{">"}</CarouselRightArrow>
    </>
  );
};
