import Pizza from './Pizza';
import Spinaci from '../assets/pizzas/spinaci.jpg';
import Focaccia from '../assets/pizzas/focaccia.jpg';
import '../index.css';

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach and ricotta cheese"
        photoName={Spinaci}
        price={10}
      />

      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName={Focaccia}
        price={6}
      />
    </main>
  );
};

export default Menu;
