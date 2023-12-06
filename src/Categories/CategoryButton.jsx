import React, { useContext } from 'react';
import { mealsContext } from '../contexts/MealsContext';
import mealsData from '../data';

const CategoryButton = ({ title }) => {
  const { setMeals } = useContext(mealsContext);
  function filterMeals() {
    if (title === 'All') setMeals(mealsData);
    else {
      const newMeals = mealsData.filter(
        (el) => el.category === title.toLowerCase()
      );
      setMeals(newMeals);
    }
  }
  return (
    <>
      <button className="btn cat-btn" onClick={filterMeals}>
        {title}
      </button>
    </>
  );
};

export default CategoryButton;
