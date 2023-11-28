import PropTypes from "prop-types";
import Select, { StylesConfig, components } from "react-select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Option {
  label: string;
  value: string;
}

interface MySelectProps {
  options: Option[];
  value: any;
  onChange: (selected: Option[] | null) => void;
  isMulti: boolean;
  components: any;
  placeholder: string;
  styles: any;
  disabled: boolean;
}

const MySelect = (props: MySelectProps) => {
  return (
    <Select
      {...props}
      isMulti={props.isMulti}
      isDisabled={props.disabled}
      placeholder={props.placeholder}
      styles={props.styles}
      menuPortalTarget={document.body}
      menuPosition={"fixed"}
      options={props.options}
      isOptionDisabled={() => props.value && props.value.length > 3}
      components={props.components}
      onChange={(selected) => {
        return props.onChange(selected);
      }}
    />
  );
};

MySelect.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ExpandMoreIcon
        sx={{
          fontSize: "33px",
          color: "rgba(63, 69, 84, 1)",
        }}
      />
    </components.DropdownIndicator>
  );
};

const MySelectC = ({
  options,
  handleChange,
  optionSelected,
  placeholder,
  styles,
  disabled,
  isMulti,
}: any) => {
  return (
    <MySelect
      disabled={disabled}
      options={options}
      isMulti={isMulti}
      styles={{ ...customStyles, ...styles }}
      placeholder={placeholder}
      components={{
        DropdownIndicator,
      }}
      onChange={handleChange}
      value={optionSelected}
    />
  );
};

type OptionType = { label: string; value: string };

const customStyles: StylesConfig<OptionType, true> = {
  menuPortal: (base) => ({ ...base, zIndex: 9999, background: "red" }),
  container: (provided) => ({
    ...provided,
    width: "100%",
    minWidth: "100px",
    marginRight: "8px",
    marginLeft: "8px",
  }),
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    height: "70px",
    background: !state.isDisabled ? "#ffffff" : "lightgray",
    border: "1px solid #c9c7c7",
    borderRadius: "20px",
    opacity: 1,
    paddingLeft: "5px",
    fontSize: "18px",
    lineHeight: "27px",
    color: "black",
    boxShadow: "none",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "20px",
    paddingLeft: "5px",
    paddingRight: "15px",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "5px",
    zIndex: 1000,
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
  }),
  multiValue: (provided) => ({
    ...provided,
    minWidth: "fit-content",
    background: "#f0f0f0",
    marginRight: "5px",
    borderRadius: "20px",
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: "0px",
    paddingBottom: "0px",
    maxHeight: "200px",
    "&::-webkit-scrollbar": {
      width: "5px", // Width of the scrollbar
      height: "5px",
      paddingLeft: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "green", // Color of the scrollbar thumb
      borderRadius: "2px", // Border radius of the thumb
    },
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "black",
    cursor: "pointer",
    ":hover": {
      background: "transparent",
      color: "red",
      borderRadius: "20px",
    },
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  valueContainer: (provided) => ({
    ...provided,
    overflowX: "auto", // Enable horizontal scrolling if needed
    overflowY: "hidden", // Hide vertical scrollbar
    flexWrap: "nowrap", // Prevent flex items from wrapping
    scrollbarWidth: "thin", // For Firefox
    scrollbarColor: "transparent transparent", // For Firefox
    paddingBottom: "5px",
    paddingLeft: "0px",
    marginLeft: "8px",
    "&::-webkit-scrollbar": {
      width: "2px", // Width of the scrollbar
      height: "5px",
      paddingLeft: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "green", // Color of the scrollbar thumb
      borderRadius: "2px", // Border radius of the thumb
    },
  }),
};

export default MySelectC;
