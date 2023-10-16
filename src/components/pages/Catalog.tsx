import { useState, useEffect, useContext } from "react";
import { items } from "../../helper/constants";
import BasicBox from "../basic/BasicBox";
import styled from "@emotion/styled";
import { CarouselBlockTypes } from "../carousel/CarouselBlock";
import { PropertyData } from "../PropertyData";
import { MoreButton } from "../MoreButton";
import { FiltersRow } from "../FiltersRow";
import { FilterType } from "../../config/types";
import { FilterContext } from "../../App";
import useIsMobile from "../../helper/isMobile";
import { MobileAd } from "../mobile/MobileAd";

const Wrapper = styled(BasicBox)``;

const InnerWrapper = styled(BasicBox)`
  max-width: 85%;
`;

type CatalogProps = {
  onDelete: (filter: FilterType) => void;
};
export const Catalog = (props: CatalogProps) => {
  const [data, setData] = useState<CarouselBlockTypes[]>(items.slice(0, 9));
  const isMobile = useIsMobile();

  const [names, setNames] = useState([]);
  const [number, setNumber] = useState(data?.length);

  const filters = useContext(FilterContext);

  const onAddMore = () => {
    setData([...data, ...items.slice(number, number + 9)]);
    setNumber(number + 9);
  };
  useEffect(() => {
    if (data) {
      setNumber(data.length);
    }
  }, [data.length]);

  return (
    <Wrapper
      justify="center"
      bottom={isMobile ? "0px" : "600px"}
      direction="column"
      fullWidth
    >
      <InnerWrapper
        direction="column"
        align="center"
        bottom="50px"
        left={isMobile ? "36px" : "0px"}
        right={isMobile ? "36px" : "0px"}
      >
        {Object.values(filters).length > 0 && (
          <BasicBox fullWidth align="flex-start">
            <FiltersRow filters={filters} onDelete={props.onDelete} />
          </BasicBox>
        )}
        <PropertyData data={data} top={Object.values(filters).length > 0} />
        <MoreButton onClick={onAddMore} max={number % 9 > 0}></MoreButton>
      </InnerWrapper>
      {isMobile && <MobileAd />}
    </Wrapper>
  );
};
