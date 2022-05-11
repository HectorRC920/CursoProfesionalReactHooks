import React, {
  useEffect,
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Card from "./Card";
import "./Characters.css";
import { Search } from "./Search";
const BASE_URL = "https://rickandmortyapi.com/api/character/";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
const Characters = (props) => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    const charactersindex = () => {
      const indexes = [];
      for (let index = 0; index < 20; index++) {
        indexes.push(Math.floor(Math.random() * 500));
      }
      return indexes;
    };
    fetch(BASE_URL + charactersindex())
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
    characters.forEach((character) => {
      if (favorite.id === character.id) {
        character.favorite = true;
      }
    });
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  },[])
  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // })
  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className="Favorites">
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </div>
      <div className="Characters">
        {filteredUsers.map((character, key) => {
          return (
            <div key={key}>
              <Card
                favorites={favorites}
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
    </>
  );
};
export default Characters;
