import { useState } from "react";

const yupForm = yup.object().shape;

const Form = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.name.length < 2) {
      alert("name must be at least 2 characters");
    }
  };
  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label htmlFor="Name">
        Enter your name:
        <input
          id="name-input"
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="pizzaSize">
        <select
          id="size-dropdown"
          className="pizzaSize"
          name="pizzaSize"
          onChange={handleChange}
          value={inputs.pizzaSize || ""}
        >
          <option value="X-LARGE">X-LARGE</option>
          <option value="LARGE">LARGE</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="SMALL">SMALL</option>
        </select>
      </label>
      <br />

      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="chicken"
          value={inputs.chicken || "chicken"}
          onChange={handleChange}
        />{" "}
        Chicken:
      </label>
      <br />
      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="beef"
          value={inputs.beef || "beef"}
          onChange={handleChange}
        />
        Beef:
      </label>
      <br />
      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="pepperoni"
          value={inputs.pepperoni || "pepperoni"}
          onChange={handleChange}
        />
        pepperoni:
      </label>
      <br />
      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="cheese"
          value={inputs.cheese || "cheese"}
          onChange={handleChange}
        />{" "}
        cheese:
      </label>
      <br />

      <label htmlFor="special-text">Special Instrucions:</label>
      <textarea
        id="special-text"
        name="specialText"
        value={inputs.specialText || ""}
        onChange={handleChange}
        rows=""
        cols="10"
      ></textarea>
      <br />

      {/* <input id="order-button" type="submit" /> */}
      <button id="order-button" type="submit">
        Order
      </button>
    </form>
  );
};

export default Form;
