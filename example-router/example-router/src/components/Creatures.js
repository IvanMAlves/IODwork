import React, { useEffect, useState } from "react";

const Creatures = () => {
  const [creatures, setCreature] = useState([]);

  const fetchAllCreatures = () => {
    let seaID = 1;
    fetch(`http://acnhapi.com/v1/sea/${seaID}`)
      .then((response) => response.json())
      .then((data) => setCreature(data));
  };

  useEffect(() => {
    fetchAllCreatures();
    return function cleanup() {
      setCreature([]);
    };
  }, []);
  console.log(creatures);
  return (
    <div>
      <h1>Name: {creatures["file-name"]}</h1>
      <h3>Price: {creatures.price}</h3>
      <h3>Speed: {creatures.speed}</h3>
    </div>
  );
};

export default Creatures;
