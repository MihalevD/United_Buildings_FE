import React, { useState } from "react";
import BasicBox from "../basic/BasicBox";
import { CarouselBlock, CarouselBlockTypes } from "./CarouselBlock";
import apart from "../../img/ap.jpg";
import { items } from "../../helper/constants";
import styled from "@emotion/styled";

const CarouselWrapper = styled(BasicBox)`
  overflow: auto;
  width: 100%;
`;

export const Carousel = () => {
  const [carouselData, setCarouselData] = useState<CarouselBlockTypes[]>(items);
  return (
    <CarouselWrapper>
      {carouselData.map((item, index) => {
        return <CarouselBlock key={index} {...item} />;
      })}
    </CarouselWrapper>
  );
};
