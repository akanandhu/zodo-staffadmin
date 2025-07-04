import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

function InputField(props) {
  const {
    name,
    label,
    type,
    validation,
    placeholder,
    disabled,
    defaultValue,
    pattern,
    customValidate,
  } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`form-control ${
          errors !== undefined && errors[name] ? "is-invalid" : ""
        }`}
        {...register(name, {
          ...validation,
          validate: customValidate || validation?.validate,
        })}
        defaultValue={defaultValue}
        pattern={pattern}
      />
      {errors !== undefined && errors[name] && (
        <div className="invalid-feedback">
          {errors !== undefined && errors[name].message}
        </div>
      )}
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.node,
  label: PropTypes.node,
  type: PropTypes.node,
  validation: PropTypes.node,
  placeholder: PropTypes.node,
  disabled: PropTypes.node,
  defaultValue: PropTypes.node,
  pattern: PropTypes.string,
  customValidate: PropTypes.func,
};

export default InputField;
