import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Card } from "./Card";

type Character = {
  id: number;
  name: string;
  images: string[];
};

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const apiUrl = "https://narutodb.xyz/api/character";

    const result = await axios.get(apiUrl);
    setCharacters(result.data.characters);
  };

  return (
    <div className="container">
      <main>
        <div className="cards-container">
          {characters.map((character) => (
            <Card
              key={character.id}
              character={character}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
