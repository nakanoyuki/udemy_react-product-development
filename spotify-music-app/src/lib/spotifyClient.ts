import { getToken } from "./getToken";

class ShopifyClient {
  token: string | null = null;

  static async initialize() {
    const getTokenData = await getToken();

    const spotify = new ShopifyClient();
    spotify.token = getTokenData.access_token;
    return spotify;
  }
}

export default ShopifyClient;