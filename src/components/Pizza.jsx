import '../index.css';

const Pizza = (props) => {
  const { name, ingredients, photoName, price } = props.pizzaObj;
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

export default Pizza;
