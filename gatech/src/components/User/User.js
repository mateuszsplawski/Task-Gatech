import React, { useState } from "react";
import styled from "styled-components";
import colors from "./../../theme/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const StyledLi = styled.li`
  width: 320px;
  list-style: none;
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${props =>
      props.sex ? props.colors.womenBorderColor : props.colors.menBorderColor};
  box-shadow: 0 0 20px -19px ${props => (props.sex ? props.colors.womenBorderColor : props.colors.menBorderColor)};
  margin: 0 auto 10px auto;
  border-radius: 25px;
  overflow: hidden;
  transition: max-height 0.4s;
  max-height: ${props => (props.expanded ? "1000px" : "50px")};
  background: ${props => props.colors.userBackgroundColor};

  &:last-of-type {
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;

    div {
      height: ${props => (props.expanded ? "60px" : "50px")};
      width: ${props => (props.expanded ? "60px" : "50px")};
      border-radius: 50%;
      box-shadow: 1px 1px 9px -4px ${props => (props.sex ? props.colors.womenBorderColor : props.colors.menBorderColor)};
      background-color: ${props => props.colors.imgBackgroundColor};
      overflow: hidden;
      margin: 0 ${props => (props.expanded ? "10px" : "25px")} 0 0;
      transition: all 0.4s;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    h1 {
      width: 200px;
      font-size: 19px;
    }

    button {
      justify-self: flex-end;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 23px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;

      svg {
        color: ${props =>
          props.expanded
            ? props.colors.cardButtonActive
            : props.colors.cardButtonOff};
        transform: ${props => (props.expanded ? "rotate(180deg)" : "unset")};
        transition: transform 0.4s;
      }
    }
  }

  h1,
  p {
    display: flex;
    flex-direction: column;

    span {
      font-size: 10px;
      font-weight: 300;
      text-transform: uppercase;
      color: grey;
    }
  }

  ul {
    margin-left: 65px;
    display: flex;
    flex-direction: column;
    li {
      margin: 5px;
      list-style: none;
      a {
        color: black;
        font-style: italic;
      }
    }
  }
`;

const User = ({ userData }) => {
  const [expanded, setExpanded] = useState(false);

  const {
    address: { city, street, houseNumber },
    name,
    email,
    sex,
    avatar,
    age
  } = userData;
  return (
    <StyledLi sex={sex} colors={colors} expanded={expanded}>
      <header>
        <div>
          <img src={avatar} alt={"avatar"} />
        </div>
        <h1>
          <span>Imię i nazwisko</span>
          {name}
        </h1>
        <button onClick={() => setExpanded(!expanded)}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </header>
      <ul>
        <li>
          <p>
            <span>Adres zamieszkania</span>
            {city}, ul.{street} {houseNumber}
          </p>
        </li>
        <li>
          <p>
            <span>E-mail</span>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </li>
        <li>
          <p>
            <span>Wiek</span>
            {age} lat
          </p>
        </li>
      </ul>
    </StyledLi>
  );
};

export default User;
