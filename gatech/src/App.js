import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchSection from "./components/SearchSection/SearchSection";
import DisplaySection from "./components/DisplaySection/DisplaySection";
import colors from "./theme/colors";

const StyledWrapper = styled.main`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(
    45deg,
    ${props => props.colors.mainColor},
    rgb(244, 244, 244),
    ${props => props.colors.mainColor}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterErr, setFilterErr] = useState(false);
  const [sortAge, setSortAge] = useState(true);
  const [sortEmail, setSortEmail] = useState(true);

  useEffect(() => {
    const fetchData = async () =>
      fetch("./clients.json")
        .then(response => response.json())
        .then(data => setUsersData(data.data))
        .catch(err => console.log(err));
    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      setFilterErr(false);
      setFilteredData(usersData);
    } else if (searchValue !== "" && filteredData.length === 0) {
      setFilterErr(true);
      setFilteredData(
        usersData.filter(userData =>
          userData.name.toUpperCase().includes(searchValue.toUpperCase())
        )
      );
    } else {
      setFilterErr(false);
      setFilteredData(
        usersData.filter(userData =>
          userData.name.toUpperCase().includes(searchValue.toUpperCase())
        )
      );
    }
  }, [searchValue, usersData, filteredData.length]);

  useEffect(() => {
    if (sortAge) {
      filteredData.sort((a, b) => {
        if (a.age > b.age) {
          return 1;
        } else if (a.age < b.age) {
          return -1;
        }
      });
    } else if (!sortAge) {
      filteredData.sort((a, b) => {
        if (a.age > b.age) {
          return -1;
        } else if (a.age < b.age) {
          return 1;
        }
      });
    } else if (sortEmail) {
      filteredData.sort((a, b) => {
        if (a.email > b.email) {
          return 1;
        } else if (a.email < b.email) {
          return -1;
        }
      });
    }
  }, [sortAge, filteredData, sortEmail]);

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleButtonClick = e => {
    e.preventDefault();
    if (e.target.name === "age") {
      // TRUE ASCENDING ORDER
      setSortAge(!sortAge);
    } else if (e.target.name === "email") {
      // TRUE A-Z
      setSortEmail(e.target.value);
    } else return undefined;
  };

  return (
    <StyledWrapper colors={colors}>
      <SearchSection
        sortAge={sortAge}
        sortEmail={sortEmail}
        handleButtonClick={handleButtonClick}
        handleInputChange={handleInputChange}
        searchValue={searchValue}
      />
      <DisplaySection filterErr={filterErr} filteredData={filteredData} />
    </StyledWrapper>
  );
};

export default App;
