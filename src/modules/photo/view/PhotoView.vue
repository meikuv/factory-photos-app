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
    <div class="content-image">
      <img alt="" :src="photo.urls.full" class="photo-img" />
    </div>
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
}

@media only screen and (max-width: 600px) {
  .photo-content {
    width: 90%;
  }

  .photo-img {
    height: 400px;
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
}
</style>
