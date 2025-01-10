import { useEffect, useState } from "react";
import SpotifyClient from "./lib/spotifyClient";
import { SongList } from "./components/SongList";

export default function App() {
  const [, setPopularSongs] = useState([]);
  const [, setSpotify] = useState<SpotifyClient | null>(null);

  useEffect(() => {
    const initializeSpotify = async () => {
      const spotifyInstance = await SpotifyClient.initialize();
      setSpotify(spotifyInstance);

      const songs = await spotifyInstance.getPopularSongs();
      setPopularSongs(songs);
    };

    initializeSpotify();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-1 p-8 mb-20">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Music App</h1>
        </header>
        <section>
          <h2 className="text-2xl font-semibold mb-5">Popular Songs</h2>
          <SongList />
        </section>
      </main>
    </div>
  );
}
