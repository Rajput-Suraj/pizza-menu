import '../index.css';

const Pizza = ({ name, ingredients, photoName, price }) => {
  return (
    <div className="pizzas">
      <div className="pizza">
        <img src={photoName} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
