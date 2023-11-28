import { useState, useEffect, useContext } from "react";
import { items } from "../../helper/constants";
import BasicBox from "../basic/BasicBox";
import styled from "@emotion/styled";
import { CarouselBlockTypes } from "../carousel/CarouselBlock";
import { PropertyData } from "../PropertyData";
import { MoreButton } from "../MoreButton";
import { FiltersRow } from "../FiltersRow";
import { FilterType } from "../../config/types";
import useIsMobile from "../../helper/isMobile";
import { MobileAd } from "../mobile/MobileAd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { TextContainer } from "../basic/TextContainer";

const Wrapper = styled(BasicBox)``;

const InnerWrapper = styled(BasicBox)`
  max-width: 85%;
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
const textStyles = {
  fontSize: "48px",
  lineHeight: "24px",
  color: "#3f4554",
};

export const Catalog = () => {
  const data = useSelector((state: RootState) => state.apartments);
  const dispatch = useDispatch();

  const isMobile = useIsMobile();
  const [number, setNumber] = useState(data?.length);

  const filters = useSelector((state: RootState) => state.filters);

  const onAddMore = () => {
    dispatch({ type: "ADD_MORE" });
  };
  useEffect(() => {
    if (data) {
      setNumber(data.length);
    }
  }, [data.length]);

  return (
    <Wrapper justify="center" align="center" direction="column" fullWidth>
      <InnerWrapper
        direction="column"
        align="center"
        bottom="80px"
        left={isMobile ? "36px" : "0px"}
        right={isMobile ? "36px" : "0px"}
      >
        {Object.values(filters).length > 0 && (
          <BasicBox fullWidth align="center" top="30px">
            <FiltersRow />
          </BasicBox>
        )}
        {data && data.length > 0 && (
          <>
            <PropertyData data={data} top={Object.values(filters).length > 0} />
            <MoreButton onClick={onAddMore} max={number % 9 > 0}></MoreButton>
          </>
        )}
        {data && data.length === 0 && (
          <BasicBox fullWidth align="center" top="100px" bottom="100px">
            <TextContainer
              className="search-text"
              text="Няма намерени резултати"
              textStyles={textStyles}
            />
          </BasicBox>
        )}
      </InnerWrapper>
      {isMobile && <MobileAd />}
    </Wrapper>
  );
};
