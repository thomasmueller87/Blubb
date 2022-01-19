import styled from 'styled-components';
import { useState } from 'react';

function TextInput({
  name,
  value,
  onTextInputChange,
  placeholder,
  children,
  width,
  errorMessage,
  required,
  pattern,
}) {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <Style>
        <label htmlFor={name}>{children}</label>
        <input
          type='text'
          id={name}
          name={name}
          onChange={onTextInputChange}
          placeholder={placeholder}
          value={value}
          width={width}
          required={required}
          pattern={pattern}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </Style>
    </>
  );
}

export default TextInput;

const Style = styled.div`
  span {
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
  }

  input:invalid[focused='true'] ~ span {
    display: block;
  }
`;
