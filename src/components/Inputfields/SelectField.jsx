import PropTypes from "prop-types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
function SelectField(props) {
  const {
    name,
    label,
    options,
    validationMessage,
    placeholder,
    isMultiSelect,
    isLoading,
  } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const selectStyle = {
    control: (base, state) => ({
      ...base,
      height: "45px",
      borderRadius: "10px",
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused ? "#0052cc" : "#ced4da",
      "&:hover": {
        borderColor: state.isFocused ? "#0052cc" : "#ced4da",
      },
    }),
  };
  return (
    <div>
      {label && (
        <label htmlFor={name} className="mb-2">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        rules={{ required: validationMessage }}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            // className="basic-single"
            // classNamePrefix="select"
            placeholder={placeholder}
            styles={selectStyle}
            isMulti={isMultiSelect}
            isLoading={isLoading}
          />
        )}
      />
      {errors[name] && <p className="text-danger">{errors[name].message}</p>}
    </div>
  );
}

SelectField.propTypes = {
  name: PropTypes.node,
  label: PropTypes.node,
  validationMessage: PropTypes.node,
  placeholder: PropTypes.node,
  isMultiSelect: PropTypes.node,
  options: PropTypes.node,
  isLoading: PropTypes.node,
};

export default SelectField;
