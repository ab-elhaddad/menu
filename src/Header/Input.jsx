import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { mealsContext } from '../contexts/MealsContext';
import mealsData from '../data';

const Input = () => {
  const { setMeals } = useContext(mealsContext);
  const searchHandler = (e) => {
    e.preventDefault();
    const word = e.target[0].value;
    if (word === '') return;
    e.target[0].value = '';
    const newMeals = filterSearchResults(word);
    setMeals(newMeals);
  };
  return (
    <>
      <Form className="d-flex" onSubmit={searchHandler}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" type="submit" className="search-btn">
          Search
        </Button>
      </Form>
    </>
  );
};

function filterSearchResults(word) {
  const newMeals = mealsData.filter((el) => {
    const regex = new RegExp(word, 'gi');
    const foundInTitle = el.title.search(regex) !== -1;
    const foundInDescription = el.description.search(regex) !== -1;
    return foundInTitle || foundInDescription;
  });
  return newMeals;
}

export default Input;
