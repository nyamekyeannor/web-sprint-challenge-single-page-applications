export default Home;

import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="homePage">
            <nav>
                <h1> Lets eat pizza!</h1>
                <img src="https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg" />
                <h1>Breakfast Pizza</h1>
                <img src="https://s23209.pcdn.co/wp-content/uploads/2018/03/Bacon-Breakfast-PizzaIMG_3552-copy.jpg" />

            </nav>

        </div>

    );

}

export default Home;