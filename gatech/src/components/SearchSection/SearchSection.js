import React from "react";
import styled from "styled-components";
import colors from "./../../theme/colors";
import Button from "./../Button/Button";

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
  sortEmailValue,
  sortAgeValue,
  clearSort,
  sortData,
  handleSelectChange
}) => {
  return (
    <StyledSection colors={colors}>
      <form>
        <label>
          <p>Wyszukaj użytkownika</p>
          <input value={searchValue} onChange={handleInputChange} type="text" />
        </label>
        <p>Sortuj według</p>
        <select
          name="EmailSortSelect"
          value={sortEmailValue}
          onChange={handleSelectChange}
          id="email"
          disabled={clearSort}
        >
          <option>Sortuj przez email</option>
          <option value="AZ">Email A-Z</option>
          <option value="ZA">Email Z-A</option>
        </select>
        <select
          name="AgeSortSelect"
          value={sortAgeValue}
          onChange={handleSelectChange}
          id="age"
          disabled={clearSort}
        >
          <option>Sortuj przez wiek</option>
          <option value="ASC">Wiek rosnąco</option>
          <option value="DESC">Wiek malejąco</option>
        </select>
        <Button
          id="clear"
          value={clearSort}
          name={clearSort ? "Resetuj filtr" : "Zastosuj filtr"}
          func={sortData}
        />
      </form>
    </StyledSection>
  );
};

export default SearchSection;
