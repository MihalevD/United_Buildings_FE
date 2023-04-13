import React, {useState} from 'react';
import BasicBox from '../basic/BasicBox';
import {CarouselBlock, CarouselBlockTypes} from './CarouselBlock';
import apart from '../../img/ap.jpg';
import {items} from '../../helper/constants';

export const Carousel = () => {
  const [carouselData, setCarouselData] = useState<CarouselBlockTypes[]>(items);
  return (
    <BasicBox>
      {carouselData.map((item, index) => {
        return <CarouselBlock key={index} {...item} />;
      })}
    </BasicBox>
  );
};
