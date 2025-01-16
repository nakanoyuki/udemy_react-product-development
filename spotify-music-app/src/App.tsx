import { useEffect, useState } from "react";
import SpotifyClient from "./lib/spotifyClient";
import { SongList } from "./components/SongList";
import { SearchInput } from "./components/SearchInput";
import { Pagination } from "./components/Pagination";

export const processSongsData = (items: any) => {
  return items.map((item: any) => ({
    ...item.track,
  }));
};

export default function App() {
  const [loading, setLoading] = useState(false);
  const [, setSpotify] = useState<SpotifyClient | null>(null);
  const [popularSongs, setPopularSongs] = useState([]);
  const [keyword, setKeyWord] = useState("");
  const [searchedSongs, setSearchedSongs] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    const initializeSpotify = async () => {
      setLoading(true);
      const spotifyInstance = await SpotifyClient.initialize();
      setSpotify(spotifyInstance);

      const songs = await spotifyInstance.getPopularSongs();
      const processedSongs = processSongsData(songs);
      setPopularSongs(processedSongs);
      setLoading(false);
    };
    initializeSpotify();
  }, []);

  const handleInputChange = (e: any) => {
    setKeyWord(e.target.value);
  };

  const searchSongs = async () => {
    if (!keyword) return;
    setLoading(true);
    const offset = (page - 1) * limit;
    const spotifyInstance = await SpotifyClient.initialize();
    setSpotify(spotifyInstance);

    const result = await spotifyInstance.getSearchSongs(keyword, limit, offset);
    setSearchedSongs(result);
    setLoading(false);
  };

  const isSearchActive = keyword.trim() !== "" && searchedSongs.length > 0;

  const moveToNext = async () => {
    setPage((prevPage) => prevPage + 1);
    await searchSongs();
  };

  const moveToPrev = async () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    await searchSongs();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-1 p-8 mb-20">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Music App</h1>
        </header>
        <SearchInput
          handleInputChange={handleInputChange}
          searchSongs={searchSongs}
        />
        <section>
          <h2 className="text-2xl font-semibold mb-5">
            {isSearchActive ? "Search Songs" : "Popular Songs"}
          </h2>
          <SongList
            loading={loading}
            songs={isSearchActive ? searchedSongs : popularSongs}
          />
          {isSearchActive && (
            <Pagination onNext={moveToNext} onPrev={moveToPrev} />
          )}
        </section>
      </main>
    </div>
  );
}
