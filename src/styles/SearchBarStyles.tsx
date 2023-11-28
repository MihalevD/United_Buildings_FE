const textStyles = {
  fontSize: "40px",
  lineHeight: "53px",
  color: "#3f4554",
};

const blockStyle = (top: string) => ({
  position: "absolute" as "absolute",
  top: top,
  width: "100%",
  zIndex: 1,
});

const innerStyle = {
  backdropFilter: "blur(30px)",
  boxShadow: "0px 3px 6px #00000029",
  borderRadius: "20px",
  width: "75%",
  boxSizing: "border-box" as const,
};

export { textStyles, blockStyle, innerStyle };
