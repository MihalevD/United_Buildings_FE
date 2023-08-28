import React, { useState } from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";
import makeAnimated from "react-select/animated";
import styled from "@emotion/styled";
import Select, {
  StylesConfig,
  ActionMeta,
  MultiValue,
  components,
} from "react-select";

interface Option {
  label: string;
  value: string;
}

interface MySelectProps {
  options: Option[];
  value: any;
  onChange: (selected: Option[] | null) => void;
  allowSelectAll: boolean;
  allOption: Option;
  isMulti: boolean;
  closeMenuOnSelect: boolean;
  hideSelectedOptions: boolean;
  components: any;
  placeholder: string;
  styles: any;
}

const MySelect = (props: MySelectProps) => {
  if (props.allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        isMulti={props.isMulti}
        placeholder={props.placeholder}
        styles={props.styles}
        menuPortalTarget={document.body}
        menuPosition={"fixed"}
        options={[props.allOption, ...props.options]}
        closeMenuOnSelect={props.closeMenuOnSelect}
        hideSelectedOptions={props.hideSelectedOptions}
        components={props.components}
        onChange={(selected) => {
          if (
            selected !== null &&
            selected.length > 0 &&
            selected[selected.length - 1].value === props.allOption.value
          ) {
            return props.onChange(props.options);
          }
          return props.onChange(selected);
        }}
      />
    );
  }

  return <ReactSelect {...props} />;
};

MySelect.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  allowSelectAll: PropTypes.bool.isRequired,
  allOption: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

MySelect.defaultProps = {
  allOption: {
    label: "Select all",
    value: "*",
  },
};

const Option = (props: any) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const MyMultiValue = (props: any) => (
  <components.MultiValue {...props} styles={customStyles.multiValue}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);

const animatedComponents = makeAnimated();

const MySelectC = ({
  options,
  handleChange,
  optionSelected,
  styles,
  placeholder,
  isMulti,
}: any) => {
  return (
    <MySelect
      options={options}
      isMulti={isMulti}
      styles={styles ?? customStyles}
      placeholder={placeholder}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        Option,
        MultiValue: MyMultiValue,
        animatedComponents,
      }}
      onChange={handleChange}
      allowSelectAll={true}
      value={optionSelected}
    />
  );
};

type OptionType = { label: string; value: string };

const customStyles: StylesConfig<OptionType, true> = {
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  input: (base) => ({
    ...base,
    display: "none",
  }),
  container: (provided) => ({
    ...provided,
    width: "100%",
    minWidth: "100px",
    marginRight: "16px",
  }),
  control: (provided) => ({
    ...provided,
    width: "100%",
    height: "70px",
    background: "#ffffff",
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
    background: "#ffffff",
    paddingLeft: "5px",
    paddingRight: "15px",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "5px",
    zIndex: 1000,
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isFocused ? "#c9c7c7" : "white",
    color: state.isFocused ? "white" : "black",
  }),
  multiValue: (provided) => ({
    ...provided,
    minWidth: "fit-content",
    background: "#f0f0f0",
    marginRight: "5px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    overflowX: "auto", // Enable horizontal scrolling if needed
    overflowY: "hidden", // Hide vertical scrollbar
    flexWrap: "nowrap", // Prevent flex items from wrapping
    scrollbarWidth: "thin", // For Firefox
    scrollbarColor: "transparent transparent", // For Firefox
    paddingBottom: "5px",
    "&::-webkit-scrollbar": {
      width: "2px", // Width of the scrollbar
      height: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#ccc", // Color of the scrollbar thumb
      borderRadius: "2px", // Border radius of the thumb
    },
  }),
};

export default MySelectC;
