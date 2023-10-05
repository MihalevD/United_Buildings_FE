import React, { useState } from "react";
import BasicBox from "../basic/BasicBox";
import { CarouselBlock, CarouselBlockTypes } from "./CarouselBlock";
import apart from "../../img/ap.jpg";
import { items } from "../../helper/constants";
import styled from "@emotion/styled";
import useIsMobile from "../../helper/isMobile";
import { MobileCarouselBlock } from "./MobileCarouselBlock";

const CarouselWrapper = styled(BasicBox)`
  overflow: auto;
  width: 100%;
`;

export const Carousel = () => {
  const [carouselData, setCarouselData] = useState<CarouselBlockTypes[]>(items);
  const isMobile = useIsMobile();
  return (
    <CarouselWrapper>
      {carouselData.map((item, index) => {
        return !isMobile ? (
          <CarouselBlock key={index} {...item} />
        ) : (
          <MobileCarouselBlock key={index} {...item} />
        );
      })}
    </CarouselWrapper>
  );
};
