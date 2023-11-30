import BasicBox from "./basic/BasicBox";
import styled from "@emotion/styled";
import { CarouselBlock, ApartType } from "./carousel/CarouselBlock";
import useIsMobile from "../helper/isMobile";
import { MobileCarouselBlock } from "./carousel/MobileCarouselBlock";

const Wrapper = styled(BasicBox)`
  min-height: 1200px;
  flex-wrap: wrap;
`;

type PropertyDataProps = {
  data: ApartType[];
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
          <CarouselBlock key={index} apartment={item} />
        ) : (
          <MobileCarouselBlock key={index} apartment={item} />
        );
      })}
    </Wrapper>
  );
};
