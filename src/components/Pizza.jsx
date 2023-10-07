import Spinaci from '../assets/pizzas/spinaci.jpg';

const Pizza = () => {
  return (
    <div className="pizzas">
      <div className="pizza">
        <img src={Spinaci} alt="Spinaci Pizza" />
        <h3>Pizza Spinaci</h3>
      </div>
    </div>
  );
};

export default Pizza;
