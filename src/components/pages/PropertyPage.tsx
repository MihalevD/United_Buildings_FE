import { useParams } from "react-router-dom";
import BasicBox from "../basic/BasicBox";
import { useState } from "react";
import { items } from "../../helper/constants";
import { ImageBlockProperty } from "../ImageBlockProperty";
import { BackButton } from "../BackButton";
import { InfoBoxProperty } from "../InfoBoxProperty";
import { SuggestionSection } from "../SuggestionSection";

export const PropertyPage = () => {
  const { id } = useParams();
  const [data] = useState(items.find((elem) => elem.id === Number(id)));
  return (
    <BasicBox
      left="100px"
      right="100px"
      fullWidth
      style={{ boxSizing: "border-box" }}
      direction="column"
      bottom="500px"
    >
      <BackButton />
      <BasicBox fullWidth>
        <ImageBlockProperty />
      </BasicBox>
      <InfoBoxProperty data={data} />
      <SuggestionSection />
    </BasicBox>
  );
};
