import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { DivForm, InputForm } from "./styles";

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: 0.1s ease-in-out;
`;

const FormFieldWrapper = styled.div`
  position: relative;

  textarea {
    min-height: 0;
    margin-top:10px;
  }

  input {
    padding-left: 180px;
  }
`;
const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;
  box-shadow: 0 0 20px -2px var(--primary);

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      hasValue &&
      css`
        &:not([type="color"]) + ${Label.Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

function FormField({ label, type, name, value, onChange, as }) {
  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={as}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Label.Text>{label}:</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  as: PropTypes.string.isRequired,
};
export default FormField;
