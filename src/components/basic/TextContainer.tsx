import BasicBox from './BasicBox';

type TextProps = {
  text: string;
  textStyles?: React.CSSProperties;
  customStyles?: React.CSSProperties;
};
export const TextContainer: React.FC<TextProps> = ({
  text,
  textStyles,
  customStyles,
}) => {
  return (
    <BasicBox style={customStyles}>
      <span style={textStyles}>{text}</span>
    </BasicBox>
  );
};
