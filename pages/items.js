import LieuxTable from "@/Components/LieuxTable";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [places, setPlaces] = useState([
    {
      id: "1",
      name: "Eiffel Tower",
      creator: "Gustave Eiffel",
      status: "active",
      about: "Iconic Parisian landmark, Gustave Eiffel",
    },
    {
      id: "2",
      name: "Machu Picchu",
      creator: "Inca civilization",
      status: "active",
      about: "Ancient Inca citadel, breathtaking landscapes",
    },
    {
      id: "3",
      name: "Great Wall of China",
      creator: "Various Chinese dynasties",
      status: "active",
      about: "Magnificent Chinese fortifications, historical marvel",
    },
    {
      id: "4",
      name: "Taj Mahal",
      creator: "Shah Jahan",
      status: "active",
      about: "Mughal masterpiece, symbol of love",
    },
    {
      id: "5",
      name: "Pyramids of Giza",
      creator: "Ancient Egyptians",
      status: "active",
      about: "Ancient Egyptian tombs, architectural wonders",
    },
  ]);
  const deleteItemHandler = (goalId) => {
    setPlaces((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  return (

      <div className="h-screen items-center justify-center">
        <LieuxTable items={places} onDeleteItem={deleteItemHandler} />
      </div>
  );
}
