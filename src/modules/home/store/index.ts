import { defineStore } from "pinia";
import UnsplashService from "../services/unsplashService";
import { Photo } from "../typings";

export const useUnsplashStore = defineStore({
  id: "useUnsplashStore",
  state: () => ({
    data: [] as Photo[],
    favourites: [] as Photo[],
    error: [],
    loading: false,
  }),
  persist: true,
  getters: {
    getData(state): Photo[] {
      return state.data;
    },
    getLoading(state): boolean {
      return state.loading;
    },
    getFavourites(state): Photo[] {
      return state.favourites;
    },
    getPhoto: () => (id: string | string[]) => {
      if (localStorage.getItem("useUnsplashStore") !== null) {
        let photos = JSON.parse(localStorage.getItem("useUnsplashStore")!);

        return (
          photos.data.find((item: Photo) => item.id === id) ||
          photos.favourites.find((item: Photo) => item.id === id)
        );
      }
    },
  },
  actions: {
    async fetchData(query: string = ""): Promise<void> {
      this.data = [];
      this.loading = true;
      await new UnsplashService().getPhotos(query).then(
        (response) => {
          this.data = response.data;
        },
        (error) => {
          this.error =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
      this.loading = false;
    },
    addFavourites(favourite: Photo) {
      let photo = this.favourites.find((item) => item.id === favourite.id);
      if (photo) {
        const index = this.favourites.findIndex((obj) => obj.id === photo?.id);
        console.log(index);
        if (index > -1) {
          this.favourites.splice(index, 1);
        }
      } else {
        this.favourites.push(favourite);
      }
      console.log(this.favourites);
    },
    async downloadImage(urls: string) {
      const blob = await (await fetch(urls)).blob();
      const url = URL.createObjectURL(blob);
      Object.assign(document.createElement("a"), {
        href: url,
        download: "image.jpg",
      }).click();
      URL.revokeObjectURL(url);
    },
  },
});
