import Slider from "@mui/material/Slider";

interface MySliderProps {
  value: number[];
  handleChange: (event: Event, newValue: number | number[]) => void;
  valuetext: (value: number) => string;
  marks?: boolean;
}

const myMarks = [
  {
    value: 20,
    label: "20,000€",
  },

  // {
  //   value: 100,
  //   label: "100,000€",
  // },
  {
    value: 200,
    label: "200,000€",
  },
  {
    value: 500,
    label: "500,000€",
  },
  {
    value: 1000,
    label: "1,000,000€",
  },
];

export const MySlider: React.FC<MySliderProps> = ({
  value,
  handleChange,
  valuetext,
  marks = true,
}) => {
  return (
    <Slider
      getAriaLabel={() => "Цена"}
      value={value}
      min={20}
      max={1000}
      marks={marks ? myMarks : []}
      step={10}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
    />
  );
};
