import React, { createContext, useState, useEffect } from "react";
import useToggle from "../hooks/useToggle";
import { cards } from "../static/consts/db";

export const Context = createContext({});

export const Provider = (props) => {
  const [filterToggle, setFilterToggle] = useToggle();
  // all Cards
  const [allCards] = useState(cards);
  // filtered Cards
  const [filtered, setFiltered] = useState(cards);
  // selected Categories Desctop
  const [selectedCategories, setSelectedCategories] = useState(["СИТЕ"]);
  // buttons active class Desctop
  const [activeClass, setActiveClass] = useState(["СИТЕ"]);
  // filter checked mobile
  const [checked, setChecked] = useState(["СИТЕ"]);

  // Filter Buttons Mobile
  useEffect(() => {
    if (checked.length > 1) {
      const filtered = allCards.filter((card) =>
        checked.includes(card.category)
      );
      setFiltered(filtered);
    } else {
      setFiltered(allCards);
    }
  }, [checked, allCards]);

  // Toggle checked Mobile
  const handleToggle = (category) => () => {
    // curr index
    const currentIndex = checked.indexOf(category);
    const newChecked = [...checked];
    // if curr index does not exist
    if (currentIndex === -1) {
      // add to newChecked
      newChecked.push(category);
    } else {
      // remove from newChecked
      newChecked.splice(currentIndex, 1);
    }
    // update checked
    setChecked(newChecked);
  };

  // Toggle Cards Design UI Button
  const handleChangeToggleFilter = (e) => {
    setFilterToggle(e.target.checked);
  };

  // Buttons on Filters Desctop
  useEffect(() => {
    // if array length
    if (selectedCategories.length > 1) {
      // filter all cards that includes category
      const filtered = allCards.filter((card) =>
        selectedCategories.includes(card.category)
      );
      // show filtered arr
      setFiltered(filtered);
      // remove all active from arr active button
      setActiveClass(selectedCategories.filter((el) => el !== "СИТЕ"));
    } else {
      // show all cards
      setFiltered(allCards);
      // set all active
      setActiveClass(["СИТЕ"]);
    }
  }, [selectedCategories, allCards]);

  // show all cards at start
  useEffect(() => {
    setFiltered(allCards);
  }, [allCards]);

  const filterCards = (category) => {
    // if category is all
    if (category === "СИТЕ") {
      // set filtered to be all cards
      setSelectedCategories(["СИТЕ"]);
      // set active class all
      setActiveClass(["СИТЕ"]);
      // set filtered all
      setFiltered(allCards);
    } else {
      // if not add category to selected category array
      setSelectedCategories([...selectedCategories, category]);
      // if selected category includes category clicked
      if (selectedCategories.includes(category)) {
        // remove category from array
        setSelectedCategories(
          selectedCategories.filter((el) => el !== category)
        );
      }
    }
  };

  let values = {
    // toggle filter
    filterToggle,
    // toggle filter function
    handleChangeToggleFilter,
    // all cards content
    allCards,
    // filtered cards
    filtered,
    // filter cards function on button
    filterCards,
    // selected
    selectedCategories,
    // active class
    activeClass,
    // toggle class checkbox filter function
    handleToggle,
    // checked checkbox filter
    checked,
  };

  return <Context.Provider value={values}>{props.children}</Context.Provider>;
};
