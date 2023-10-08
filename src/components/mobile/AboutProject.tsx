import BasicBox from "../basic/BasicBox";
import { TextContainer } from "../basic/TextContainer";

const textStyles = {
  fontSize: "20px",
  lineHeight: "50px",
  color: "#3F4554",
};

type AboutProjectProps = {
  text: string;
};

export const AboutProject: React.FC<AboutProjectProps> = ({ text }) => {
  return (
    <BasicBox fullWidth direction="column" bottom="40px">
      <TextContainer text="ЗА ПРОЕКТА" textStyles={textStyles} />
      <BasicBox
        top="36px"
        bottom="36px"
        left="18px"
        right="18px"
        background="white"
        borderRadius="20px"
        style={{
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
          boxSizing: "border-box",
        }}
        fullWidth
      >
        {text}
      </BasicBox>
    </BasicBox>
  );
};
