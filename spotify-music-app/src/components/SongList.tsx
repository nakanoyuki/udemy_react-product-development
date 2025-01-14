import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SongList({ songs, loading }: any) {
  if (loading) {
    return (
      <div className="inset-0 flex justify-center items-center">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {songs.map((song: any) => {
        return (
          <a
            href={song.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none cursor-pointer "
          >
            <img
              alt="thumbnail"
              src={song.album.images[0]?.url}
              className="mb-2 rounded"
            />
            <h3 className="text-lg font-semibold">{song.name}</h3>
            <p className="text-gray-400">
              By {song.artists.map((artist: any) => artist.name).join(", ")}
            </p>
          </a>
        );
      })}
    </div>
  );
}
