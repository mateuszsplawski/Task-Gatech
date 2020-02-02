import React from "react";
import styled from "styled-components";
import User from "../User/User";
import colors from "./../../theme/colors";

const StyledSection = styled.section`
  background-color: ${props => props.colors.sectionBackgroundColor};
  min-height: 60vh;
  width: 450px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const DisplaySection = ({ filterErr, filteredData }) => {
  return (
    <StyledSection colors={colors}>
      <ul>
        {filterErr ? (
          <h1>Nie ma takiego użytkownika.</h1>
        ) : (
          filteredData &&
          filteredData.map(userData => (
            <User key={userData._id} userData={userData} />
          ))
        )}
      </ul>
    </StyledSection>
  );
};

export default DisplaySection;
