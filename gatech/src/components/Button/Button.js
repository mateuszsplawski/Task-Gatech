import React from "react";
import styled from "styled-components";
import colors from "./../../theme/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.button`
  padding: 10px;
  color: ${props =>
    !props.value
      ? props.colors.buttonActiveColor
      : props.colors.buttonOffColor};
  background: none;
  font-size: 20px;
  border: none;
  cursor: pointer;
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
      <FontAwesomeIcon icon={faFilter} />
    </StyledButton>
  );
};

export default Button;
