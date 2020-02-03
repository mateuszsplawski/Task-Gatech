import React from "react";
import styled from "styled-components";
import colors from "./../../theme/colors";

const StyledButton = styled.button`
  padding: 10px;
  background-color: ${props =>
    !props.value
      ? props.colors.buttonActiveColor
      : props.colors.buttonOffColor};
  outline: none;
`;

const Button = ({ name, func, value, id }) => {
  return (
    <StyledButton
      onClick={func}
      value={value}
      id={id}
      colors={colors}
      name={name}
    >
      {name}
    </StyledButton>
  );
};

export default Button;
