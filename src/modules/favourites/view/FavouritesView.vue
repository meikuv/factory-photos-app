<template>
  <Header />
  <div class="fav-text">
    <h3>Избранное</h3>
  </div>
  <picture-list :pictures="getFavourites" :loading="getLoading" />
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUnsplashStore } from "@/modules/home/store";
import PictureList from "@/modules/home/views/PictureList.vue";
import Header from "./Header.vue";

const { getFavourites, getLoading } = storeToRefs(useUnsplashStore());
</script>

<style lang="scss" scoped>
.fav-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  font-size: 48px;
  font-weight: 400;
  color: $black;
}
</style>
