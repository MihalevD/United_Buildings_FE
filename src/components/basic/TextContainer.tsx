import BasicBox from './BasicBox';

type TextProps = {
  text: string;
  textStyles?: React.CSSProperties;
  customStyles?: React.CSSProperties;
  className?: string;
};
export const TextContainer: React.FC<TextProps> = ({
  text,
  textStyles,
  customStyles,
  className,
}) => {
  return (
    <BasicBox style={customStyles}>
      <span className={className} style={textStyles}>
        {text}
      </span>
    </BasicBox>
  );
};
