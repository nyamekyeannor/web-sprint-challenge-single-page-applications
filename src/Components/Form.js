import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length < 2) {
      alert("name must be at least 2 characters");
    }
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
