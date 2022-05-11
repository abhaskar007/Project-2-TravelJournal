import React from "react";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import data from "./data.jsx";
import "./App.css";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        imageUrl={item.imageUrl}
        location ={item.location}
        googleMapsUrl ={item.googleMapsUrl}
        title={item.title}
        description={item.description}
        startDate = {item.startDate}
        endDate = {item.endDate}
      />
    );
  });

  // <Hero />
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
