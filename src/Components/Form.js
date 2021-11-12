import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };
  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Form;
