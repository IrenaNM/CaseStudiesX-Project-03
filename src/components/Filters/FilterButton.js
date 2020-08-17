import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/appContext";

const Button = styled.button`
  cursor: pointer;
  outline: none;
  background: transparent;
  color: #303f9f;
  font-size: 14px;
  border-color: #303f9f;
  border-style: solid;
  border-width: 2px;
  border-radius: 22px;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: all 0.2s linear;
  margin: 0 5px;
  &:hover {
    color: white;
    background: #303f9f;
    transition: all 0.2s linear;
    box-shadow: 0px 3px 7px 0px rgba(83, 83, 83, 0.68);
  }
  &:active {
    border-radius: 22px;
  }
  /* btn active class */
  &.active {
    color: white;
    background: #303f9f;
    box-shadow: 0px 3px 7px 0px rgba(83, 83, 83, 0.68);
  }
`;

const FilterButton = ({ category }) => {
  const { filterCards, activeClass } = useContext(Context);

  return (
    <Button
      className={activeClass.includes(category) ? "active" : ""}
      onClick={() => {
        filterCards(category);
      }}
    >
      {category}
    </Button>
  );
};

export default FilterButton;
