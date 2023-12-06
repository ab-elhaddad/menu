import Header from './Header/Header';
import Container from 'react-bootstrap/Container';
import Categories from './Categories/Categories';
import Meals from './Meals/Meals';
import Menu from './Menu';
import MealsContext from './contexts/MealsContext';

const App = () => {
  return (
    <>
      <MealsContext>
        <Header></Header>
        <Container>
          <Menu />
          <Categories />
          <Meals />
        </Container>
      </MealsContext>
    </>
  );
};

export default App;
