import React, { useEffect, useState } from "react";
import Card from "./Card";
import './Characters.css';
const BASE_URL = "https://rickandmortyapi.com/api/character/";
const Characters = (props) => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
      const charactersindex = () => {
          const indexes = []
          for (let index = 0; index < 20; index++) {
              indexes.push(Math.floor(Math.random() * 500));
          }
          return indexes;
      };
    fetch(BASE_URL+charactersindex())
      .then((response) => response.json())
      .then((data) => setCharacters(data))
  }, []);

  return (
    <div className="Characters">
      {characters.map((character,key) => {
        return (
          <div key={key}>
            <Card
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin}
            />
          </div>
        );
      })}

    </div>
  );
};
export default Characters;
