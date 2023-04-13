import BasicBox from './basic/BasicBox';
import styled from '@emotion/styled';
import {CarouselBlock, CarouselBlockTypes} from './carousel/CarouselBlock';

const Wrapper = styled(BasicBox)`
  min-height: 1200px;
  flex-wrap: wrap;
`;

type PropertyDataProps = {
  data: CarouselBlockTypes[];
  top: boolean;
};

export const PropertyData = (props: PropertyDataProps) => {
  return (
    <Wrapper justify='center' top={!props.top ? '152px' : '52px'} bottom='80px'>
      {props.data.map((item, index) => {
        return <CarouselBlock key={index} {...item} />;
      })}
    </Wrapper>
  );
};
