import BasicBox from "./basic/BasicBox";
import styled from "@emotion/styled";
import { CarouselBlock, CarouselBlockTypes } from "./carousel/CarouselBlock";
import useIsMobile from "../helper/isMobile";
import { MobileCarouselBlock } from "./carousel/MobileCarouselBlock";

const Wrapper = styled(BasicBox)`
  min-height: 1200px;
  flex-wrap: wrap;
`;

type PropertyDataProps = {
  data: CarouselBlockTypes[];
  top: boolean;
};

export const PropertyData = (props: PropertyDataProps) => {
  const isMobile = useIsMobile();
  return (
    <Wrapper
      justify="center"
      top={!props.top ? (isMobile ? "0px" : "152px") : "52px"}
      bottom="30px"
      gap="30px"
    >
      {props.data.map((item, index) => {
        return !isMobile ? (
          <CarouselBlock key={index} {...item} />
        ) : (
          <MobileCarouselBlock key={index} {...item} />
        );
      })}
    </Wrapper>
  );
};
