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
  const [clearSort, setClearSort] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterErr, setFilterErr] = useState(false);
  const [sortAgeValue, setSortAgeValue] = useState("");
  const [sortEmailValue, setSortEmailValue] = useState("");
  const [sortedData, setSortedData] = useState([]);

  //
  // FETCHING USERS DATA HOOK
  //

  useEffect(() => {
    const fetchData = async () =>
      fetch("./clients.json")
        .then(response => response.json())
        .then(data => setUsersData(data.data))
        .catch(err => console.log(err));
    fetchData();
  }, []);

  //
  // FILTER NAME HOOK
  //

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

  //
  // SORTING DATA FUNCTION
  //

  const sortData = e => {
    e.preventDefault();
    setSortedData(filteredData);
    if (!clearSort) {
      // Sort Data by Age
      if (sortAgeValue === "ASC") {
        sortedData.sort((a, b) => {
          if (a.age > b.age) {
            return 1;
          } else if (a.age < b.age) {
            return -1;
          } else return 0;
        });
        console.log("ROŚNIE");
      } else if (sortAgeValue === "DESC") {
        sortedData.sort((a, b) => {
          if (a.age > b.age) {
            return -1;
          } else if (a.age < b.age) {
            return 1;
          } else return 0;
        });
        console.log("MALEJE");
      }
      // Sort Data by Email
      if (sortEmailValue === "AZ") {
        sortedData.sort((a, b) => {
          if (a.email > b.email) {
            return 1;
          } else if (a.email < b.email) {
            return -1;
          } else return 0;
        });
        console.log("AZ");
      } else if (sortEmailValue === "ZA") {
        sortedData.sort((a, b) => {
          if (a.email > b.email) {
            return -1;
          } else if (a.email < b.email) {
            return 1;
          } else return 0;
        });
        console.log("ZA");
      }
    } else if (clearSort) {
      setSortedData([]);
      setSortEmailValue("");
      setSortAgeValue("");
      setClearSort(false);
    }
  };

  const handleSelectChange = e => {
    if (e.target.id === "email") {
      setSortEmailValue(e.target.value);
    } else if (e.target.id === "age") {
      setSortAgeValue(e.target.value);
    }
  };

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <StyledWrapper colors={colors}>
      <SearchSection
        sortAgeValue={sortAgeValue}
        sortEmailValue={sortEmailValue}
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        clearSort={clearSort}
        sortData={sortData}
      />
      <DisplaySection
        filterErr={filterErr}
        filteredData={filteredData}
        sortedData={sortedData}
      />
    </StyledWrapper>
  );
};

export default App;
