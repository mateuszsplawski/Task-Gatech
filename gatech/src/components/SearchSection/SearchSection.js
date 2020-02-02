import React from "react";
import styled from "styled-components";
import colors from "./../../theme/colors";

const StyledSection = styled.section`
  background-color: ${props => props.colors.sectionBackgroundColor};
  padding: 25px 25px 5px 25px;
  height: 100px;
  width: 450px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  form {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    label {
      width: 45%;
    }

    input {
      border: 1px solid ${props => props.colors.mainColor};
      padding: 10px;
      outline: none;
      width: 100%;
    }

    select {
      width: 100%;
    }
  }
`;

const SearchSection = ({
  handleInputChange,
  searchValue,
  sortEmail,
  sortAge,
  handleButtonClick
}) => {
  return (
    <StyledSection colors={colors}>
      <form>
        <label>
          <p>Wyszukaj użytkownika</p>
          <input value={searchValue} onChange={handleInputChange} type="text" />
        </label>
        <p>Sortuj według</p>
        <button
          name="email"
          onClick={handleButtonClick}
          value={sortEmail}
          id="2"
        >
          Email
        </button>
        <button name="age" value={sortAge} onClick={handleButtonClick} id="1">
          Wiek
        </button>
      </form>
    </StyledSection>
  );
};

export default SearchSection;
