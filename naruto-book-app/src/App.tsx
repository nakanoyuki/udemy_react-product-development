import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Card } from "./Card";

export type Character = {
  id: number;
  name: string;
  images: string[];
  debut?: { appersIn: string };
  personal?: { affiliation: string };
};

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCharacters(page);
  }, []);

  const fetchCharacters = async (page: number) => {
    const apiUrl = "https://narutodb.xyz/api/character";
    setLoading(true);
    const result = await axios.get(apiUrl, { params: { page } });
    setCharacters(result.data.characters);
    setLoading(false);
  };

  const handleNext = async () => {
    const nextPage = page + 1;
    await fetchCharacters(nextPage);
    setPage(nextPage);
  };

  return (
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <main>
          <div className="cards-container">
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
          <div className="pager">
            <button className="prev">Prev</button>
            <span className="page-number">{page}</span>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
