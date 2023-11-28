import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";

const exampleText = `Концепцията за жилищен проект жжж е вдъхновена от желанието за хармоничен начин на живот в природосъобразна среда, в близост до парк и морето. Местоположението предоставя както тишина и спокойствие, така и достъп до удобствата на градската инфраструктура. Инвеститор е строително-инвестиционна компания "жжжж" - доказано име в осъществяването на успешни проекти, с прецизност към детайла и създаването на уникална жизнена среда. Водещи принципи при архитектурните решения са „дизайнът следва функцията“ и залагане на устойчивост във времето. Фасадата осигурява максималната осветеност в домовете и общите части на сградата, което допринася за чувството за простор и благоприятен вътрешен климат.`;

const textStyles = {
  fontWeight: "600",
  fontSize: "30px",
  lineHeight: "50px",
  color: "#3F4554",
};

export const AboutProjectDesktop = () => {
  return (
    <BasicBox direction="column">
      <TextContainer text="ЗА ПРОЕКТА" textStyles={textStyles} />
      <WrapperBox fullWidth style={{ boxSizing: "border-box" }}>
        {exampleText}
      </WrapperBox>
    </BasicBox>
  );
};

const WrapperBox = styled(BasicBox)`
  background: white 0% 0% no-repeat padding-box;
  border-radius: 20px;
  text-align: left;
  padding: 40px;
  max-width: 600px;
  margin-top: 20px;
`;
