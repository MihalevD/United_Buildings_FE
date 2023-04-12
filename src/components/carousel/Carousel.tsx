import BasicBox from '../basic/BasicBox';
import {CarouselBlock, CarouselBlockTypes} from './CarouselBlock';
import apart from '../../img/ap.jpg';

export const Carousel = () => {
  const carouselData: CarouselBlockTypes[] = [
    {
      imgSrc: apart,
      imgAlt: 'name',
      title: 'Двустаен Апартамент',
      sqm: '60',
      rooms: '2',
      price: '1000',
      address: 'София, ул. Люлин 1',
    },
    {
      imgSrc: apart,
      imgAlt: 'name',
      title: 'Двустаен Апартамент',
      sqm: '60',
      rooms: '2',
      price: '1000',
      address: 'София, ул. Люлин 1',
    },
    {
      imgSrc: apart,
      imgAlt: 'name',
      title: 'Двустаен Апартамент',
      sqm: '60',
      rooms: '2',
      price: '1000',
      address: 'София, ул. Люлин 1',
    },
    {
      imgSrc: apart,
      imgAlt: 'name',
      title: 'Двустаен Апартамент',
      sqm: '60',
      rooms: '2',
      price: '1000',
      address: 'София, ул. Люлин 1',
    },
    {
      imgSrc: apart,
      imgAlt: 'name',
      title: 'Двустаен Апартамент',
      sqm: '60',
      rooms: '2',
      price: '1000',
      address: 'София, ул. Люлин 1',
    },
  ];
  return (
    <BasicBox>
      {carouselData.map((item, index) => {
        return <CarouselBlock key={index} {...item} />;
      })}
    </BasicBox>
  );
};
