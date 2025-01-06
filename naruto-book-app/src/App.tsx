import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Card } from "./Card";
import { PageNation } from "./PageNation";

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

  const handlePrev = async () => {
    const prevPage = page - 1;
    await fetchCharacters(prevPage);
    setPage(prevPage);
  };

  const handleNext = async () => {
    const nextPage = page + 1;
    await fetchCharacters(nextPage);
    setPage(nextPage);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-content">
          <img src="logo.png" alt="" className="logo" />
        </div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <main>
          <div className="cards-container">
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
          <PageNation
            handlePrev={handlePrev}
            handleNext={handleNext}
            page={page}
            characterLength={characters.length}
          />
        </main>
      )}
    </div>
  );
}

export default App;
