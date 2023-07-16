import api from "@/api/index";

const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;
const UNSPLASH_ROOT = "https://api.unsplash.com";

export default class UnsplashService {
  async getPhotos(query: string = ""): Promise<any> {
    return await api.get(
      `${UNSPLASH_ROOT}/photos/random?query=${query}&client_id=${clientId}&count=8`
    );
  }
}
