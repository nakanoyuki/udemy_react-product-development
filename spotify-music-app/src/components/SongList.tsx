export function SongList({ songs }: any) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {songs.map(() => {
        console.log(songs);
        return (
          <a
            href="https://open.spotify.com/intl-ja/track/78W4mTLIh4qoLu92W4IQhO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none cursor-pointer "
          >
            <img
              alt="thumbnail"
              src={
                "https://i.scdn.co/image/ab67616d0000b2738b7a8c1322028d45a8355f7a"
              }
              className="mb-2 rounded"
            />
            <h3 className="text-lg font-semibold">Song Name</h3>
            <p className="text-gray-400">By Artist</p>
          </a>
        );
      })}
    </div>
  );
}
