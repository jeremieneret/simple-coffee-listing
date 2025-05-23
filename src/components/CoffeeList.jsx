import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Header from "./Header";

function CoffeeList() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [error, setError] = useState(null);
  const [activeButton, setActiveButton] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        );
        setCoffeeData(response.data);

      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const displayedProducts =
    activeButton === "available"
      ? coffeeData.filter((coffee) => coffee.available === true)
      : coffeeData;

  return (
    <div className="background woodsmoke">
      <div className="background-img"></div>
      <div className="collection">
        <div className="header-container">
          <Header
            title="Our Collection"
            description="Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly."
            buttonText1="All Products"
            buttonText2="Available now"
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </div>
        <div className="coffee-list">
          {error && <p>Erreur : {error}</p>}
          {displayedProducts.map((coffee) => (
            <Card
              key={coffee.id}
              image={coffee.image}
              name={coffee.name}
              price={coffee.price}
              rating={coffee.rating}
              numberOfVotes={coffee.votes}
              popular={coffee.popular}
              available={coffee.available}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoffeeList;
