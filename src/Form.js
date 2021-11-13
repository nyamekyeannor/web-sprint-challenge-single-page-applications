import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';




// import { useState } from "react";

const yupForm = yup.object().shape({
    name: yup.string().required('name is required').min(2, 'name must be at least 2 characters'),
    pizzaSize: yup.string().oneOf(['X-LARGE','LARGE','MEDIUM','SMALL']),
    chicken: yup.boolean(),
    beef: yup.boolean(),
    pepperoni: yup.boolean(),
    cheese: yup.boolean(),
    specialText: yup.string(),

})

const defaultVal = {
    name: "",
    pizzaSize: "",
    chicken: false,
    beef: false,
    pepperoni: false,
    cheese: false,
    specialText: "",
}
function Form() {
  const [isValid, setIsValid] = useState(true);

  const [form, setForm] = useState(defaultVal);

  const [errorState, setError] = useState({
      name: "",
      pizzaSize: "",
      chicken: "",
      beef: "",
      pepperoni: "",
      cheese: "",
      specialText: "",
  })

  useEffect(() => {
      yupForm.isValid(form)
          .then(valid => {
              setIsValid()
          });
  }, [form]);

  const validate = (e) => {
    yup.reach(yupForm, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setError({
                ...errorState,
                [e.target.name]: ""
            })

        })
        .catch(error => {
            console.log(error.errors)
            // alert("name must be at least 2 characters")
            setError({
                ...errorState,
                [e.target.name]: error.errors[0]
            })
        })
};

const handleChange = e => {
    e.persist();
    validate(e)

    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setForm({ ...form, [e.target.name]: value });
};
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post(`https://reqres.in/api/orders`, form)
      .then(res => { console.log('RES', res) })
      .catch(err => console.log(err.response));
  setForm(defaultVal)
};

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label htmlFor="Name">
        Enter your name:
        <input
          id="name-input"
          type="text"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
        />
      </label>
      {errorState.name.length > 1 ? <p className="error">{errorState.name}</p> : null}

      <label htmlFor="pizzaSize">
        <select
          id="size-dropdown"
          className="pizzaSize"
          name="pizzaSize"
          onChange={handleChange}
          value={form.pizzaSize || ""}
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
          value={form.chicken || "chicken"}
          onChange={handleChange}
        />{" "}
        Chicken:
      </label>
      <br />
      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="beef"
          value={form.beef || "beef"}
          onChange={handleChange}
        />
        Beef:
      </label>
      <br />
      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="pepperoni"
          value={form.pepperoni || "pepperoni"}
          onChange={handleChange}
        />
        Pepperoni:
      </label>
      <br />
      <label htmlFor="Toppings">
        <input
          type="checkbox"
          name="cheese"
          value={form.cheese || "cheese"}
          onChange={handleChange}
        />{" "}
        Cheese:
      </label>
      <br />

      <label htmlFor="special-text">Special Instrucions:</label>
      <textarea
        id="special-text"
        name="specialText"
        value={form.specialText || ""}
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