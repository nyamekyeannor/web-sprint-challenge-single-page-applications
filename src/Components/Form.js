import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`${inputs.pizzaSize}`);
    alert(`${inputs.veggie}`);
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

      <label htmlFor="Toppings">
        Choose your toppings:
        <input
          type="checkbox"
          name="veggie"
          value={inputs.veggie || "veggie"}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="chicken"
          value={inputs.chicken || "chicken"}
          onChange={handleChange}
        />
        {/* <input
          type="checkbox"
          name="veggie"
          value={inputs.veggie || "veggie"}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="veggie"
          value={inputs.veggie || "veggie"}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="veggie"
          value={inputs.veggie || "veggie"}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="veggie"
          value={inputs.veggie || "veggie"}
          onChange={handleChange}
        /> */}
      </label>

      <input type="submit" />
    </form>
  );
};

export default Form;
