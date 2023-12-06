import React, { useState } from 'react';
import { createContext } from 'react';
import mealsData from '../data';

export const mealsContext = createContext(mealsData);
const MealsContext = ({ children }) => {
  const [meals, setMeals] = useState(mealsData);
  return (
    <>
      <mealsContext.Provider value={{ meals, setMeals }}>
        {children}
      </mealsContext.Provider>
    </>
  );
};

export default MealsContext;
