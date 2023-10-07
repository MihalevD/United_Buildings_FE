import { useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../helper/constants";
import { ImageBlockProperty } from "../ImageBlockProperty";
import { SuggestionSection } from "../SuggestionSection";
import BasicBox from "../basic/BasicBox";
import { MobileAd } from "./MobileAd";
import { MobileInfoBoxProperty } from "./MobileInfoBoxProperty";

export const MobileProjects = () => {
  const { id } = useParams();
  const [data] = useState(items.find((elem) => elem.id === Number(id)));
  return (
    <BasicBox fullWidth style={{ boxSizing: "border-box" }} direction="column">
      <BasicBox fullWidth>
        <ImageBlockProperty />
      </BasicBox>
      <BasicBox
        fullWidth
        left="36px"
        right="36px"
        direction="column"
        style={{ boxSizing: "border-box" }}
      >
        <MobileInfoBoxProperty data={data} />
        <SuggestionSection />
      </BasicBox>
      <MobileAd />
    </BasicBox>
  );
};
