import React, { useContext } from 'react';
import Meal from './Meal';
import { mealsContext } from '../contexts/MealsContext';
import NoMeals from './NoMeals';

const Meals = () => {
  const { meals } = useContext(mealsContext);
  return (
    <div className="mt-3">
      {meals.length ? meals.map((el) => <Meal el={el} />) : <NoMeals />}
    </div>
  );
};

export default Meals;
