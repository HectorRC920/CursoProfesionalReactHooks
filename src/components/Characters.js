import React, { useEffect, useState, useReducer } from "react";
import Card from "./Card";
import './Characters.css';
const BASE_URL = "https://rickandmortyapi.com/api/character/";

const initialState = {
  favorites: []
}
const favoriteReducer = (state,action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return{
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}
const Characters = (props) => {
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
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
  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite })
  }
  return (
    <div className="Characters">
      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}
      {characters.map((character,key) => {
        return (
          <div key={key}>
            <Card
                character={character}
                handleClick={handleClick}
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
