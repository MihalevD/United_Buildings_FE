import { useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../helper/constants";
import { ImageBlockProperty } from "../ImageBlockProperty";
import BasicBox from "../basic/BasicBox";
import { MobileAd } from "./MobileAd";
import { MobileProjectInfo } from "./MobileProjectInfo";
import { ProjectDetails } from "../basic/mobile/ProjectDetails";
import { AboutProject } from "./AboutProject";

const dummyText = `Концепцията за жилищен проект жжж е вдъхновена от желанието за хармоничен начин на живот в природосъобразна среда, в близост до парк и морето. Местоположението предоставя както тишина и спокойствие, така и достъп до удобствата на градската инфраструктура.\n\n\n Водещи принципи при архитектурните решения са „дизайнът следва функцията“ и залагане на устойчивост във времето. Фасадата осигурява максималната осветеност в домовете и общите части на сградата, което допринася за чувството за простор и благоприятен вътрешен климат.`;

export const MobileProjectPage = () => {
  const { id } = useParams();
  const [data] = useState(items.find((elem) => elem.id === Number(id)));
  console.log("here");
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
        <MobileProjectInfo />
        <ProjectDetails />
        <AboutProject text={dummyText} />
      </BasicBox>
      <MobileAd />
    </BasicBox>
  );
};
