import React, { useState, useEffect } from "react";
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
  box-shadow: 0 0 30px -25px ${props => props.colors.mainColor};
  position: relative;

  ul > h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }

  @media (max-width: 450px) {
    padding: 0;
    width: 100%;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const DisplaySection = ({ filterErr, filteredData, sortedData }) => {
  const [actualData, setActualData] = useState([]);
  useEffect(() => {
    sortedData.length > 0
      ? setActualData(sortedData)
      : setActualData(filteredData);
  }, [filteredData, sortedData, sortedData.length]);
  return (
    <StyledSection colors={colors}>
      <ul>
        {filterErr ? (
          <h1>Nie ma takiego użytkownika.</h1>
        ) : (
          actualData &&
          actualData.map(userData => (
            <User key={userData._id} userData={userData} />
          ))
        )}
      </ul>
    </StyledSection>
  );
};

export default DisplaySection;
