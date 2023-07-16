<template>
  <Header />
  <div
    class="photo-wrapper"
    :style="{
      backgroundImage: 'url(' + photo.urls.full + ')',
      backgroundSize: 'cover',
    }"
  ></div>
  <div class="photo-content">
    <div class="content-header">
      <div class="header-left">
        <img alt="" :src="photo.user.profile_image.large" class="avatar" />
        <div class="info">
          <h4 class="name">{{ photo.user.name }}</h4>
          <p class="username">@{{ photo.user.username }}</p>
        </div>
      </div>
      <div class="header-right">
        <button
          class="fav-button"
          :class="isFavourite ? 'bColor' : ''"
          @click="addToFavourites"
        >
          <svg-icon name="favourite" class="logo" :color="'black'" />
        </button>
        <button
          class="download-button"
          @click="store.downloadImage(photo.urls.full)"
        >
          <svg-icon name="download" class="fav-icon" :color="'black'" />
          <span class="fav-text" style="margin-left: 10px">Download</span>
        </button>
      </div>
    </div>
    <div
      class="content-image"
      :style="{
        backgroundImage: 'url(' + photo.urls.full + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }"
    >
      <!-- <img alt="" :src="photo.urls.full" class="photo-img" /> -->
      <div class="maximize-button" @click="maximizeImage(photo.urls.full)">
        <svg-icon name="maximize" />
      </div>
    </div>
  </div>
  <div id="myModal" class="modal">
    <span class="close" id="close">&times;</span>
    <img class="modal-content" id="img01" />
    <div id="caption"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useUnsplashStore } from "@modules/home/store";
import Header from "@modules/favourites/view/Header.vue";
import SvgIcon from "@components/icons/SvgIcon.vue";

const route = useRoute();
const store = useUnsplashStore();
const photo = computed(() => store.getPhoto(route.params.id));

const isFavourite = computed(() => {
  return store.favourites.find((item) => item.id === route.params.id)?.liked;
});

function addToFavourites() {
  store.addFavourites({ ...photo.value, liked: true });
}

function maximizeImage(urls: string) {
  let modal = document.getElementById("myModal");
  let modalImg: HTMLImageElement | null = document.getElementById(
    "img01"
  ) as HTMLImageElement;

  var span = document.getElementById("close");

  span!.onclick = function () {
    modal!.style.display = "none";
  };

  modal!.style.display = "block";
  modalImg!.src = urls;
}
</script>

<style lang="scss" scoped>
.photo-wrapper {
  position: absolute;
  width: 100%;
  height: 650px;
  top: 0;
  left: 0;
  filter: grayscale(0.9);
  z-index: 0;
}

.photo-content {
  width: 75%;
  height: 50%;
  margin: 50px auto;
  text-align: center;
  z-index: 2;
}

.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-right {
  display: flex;
  flex-direction: row;
}

.fav-button {
  border: 1px solid $white;
  background-color: $white;
  border-radius: 5px;
  padding: 12px 10px;
  text-align: center;
  width: 47px;
  height: 47px;
  cursor: pointer;
}

.content-image {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  width: 100%;
  height: 500px;
  border-radius: 8px;
  margin-top: 20px;
}

.maximize-button {
  margin-right: 15px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  outline: none;
}

.bColor {
  background-color: red;
}

.download-button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: $yellow;
  border: 1px solid $yellow;
  border-radius: 5px;
  padding: 12px 12px 12px 12px;
  width: 100%;
  height: 47px;
  margin-left: 20px;
  cursor: pointer;
}

.header-left {
  display: flex;
  align-items: center;
  cursor: pointer;
  .avatar {
    width: 55px;
    height: 55px;
    border-radius: 8px;
    margin-right: 1rem;
  }

  .info {
    display: inline;
    text-align: left;
  }
}
.info h4 {
  font-size: 14px;
  color: $white;
  font-weight: 300;
  margin: 0;
  padding: 0;
}

.info p {
  font-size: 12px;
  color: #bdbdbd;
  font-weight: 300;
  margin: 0;
  padding: 0;
}

.photo-img {
  width: 100%;
  height: 500px;
  border-radius: 8px;
  margin-top: 20px;
  background-size: cover;
  z-index: 2;
}

.modal {
  display: none;
  position: fixed;
  z-index: 100;
  padding-top: 2em;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .photo-content {
    width: 90%;
  }

  .content-img {
    height: 200px;
  }

  .fav-text {
    display: none;
  }

  .info {
    .name {
      color: $black;
    }
  }

  .photo-wrapper {
    display: none;
  }

  .modal-content {
    padding-top: 5em;
  }
}
</style>
