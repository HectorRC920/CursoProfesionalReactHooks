import { useState , useEffect } from "react";

const useCharacters = (url) => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        const charactersindex = () => {
          const indexes = [];
          for (let index = 0; index < 20; index++) {
            indexes.push(Math.floor(Math.random() * 500));
          }
          return indexes;
        };
        fetch(url + charactersindex())
          .then((response) => response.json())
          .then((data) => setCharacters(data));
      }, [url]);
      return characters
}
export default useCharacters;