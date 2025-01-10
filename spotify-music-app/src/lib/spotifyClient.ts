import { getToken } from "./getToken";
import axios from "axios";

class SpotifyClient {
  token: string | null = null;

  static async initialize() {
    const getTokenData = await getToken();

    const spotify = new SpotifyClient();
    spotify.token = getTokenData.access_token;
    return spotify;
  }

  async getPopularSongs() {
    const response = await axios.get(
      "https://api.spotify.com/v1/playlists/5SLPaOxQyJ8Ne9zpmTOvSe",
      { headers: { Authorization: "Bearer " + this.token } }
    );
    return response.data.tracks.items;
  }
}

export default SpotifyClient;
