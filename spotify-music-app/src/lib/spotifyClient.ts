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

  async getSearchSongs(keyword: any) {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: { Authorization: "Bearer " + this.token },
      params: { q: keyword, type: "track" },
    });
    return response.data.tracks.items;
  }
}

export default SpotifyClient;
