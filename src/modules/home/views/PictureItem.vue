<template>
  <router-link :to="{ name: 'photo', params: { id: picture.id } }">
    <img :alt="picture.alt_description" :src="picture.urls.small"/>
  </router-link>
</template>

<script lang="ts" setup>
import { Photo } from "../typings/index";

defineProps<{
  picture: Photo;
}>();
</script>

<style lang="scss" scoped>
img {
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  cursor: pointer;
}
</style>
