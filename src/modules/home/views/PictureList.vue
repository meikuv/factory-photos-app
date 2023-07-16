<template>
  <ul class="picture-list">
    <li v-for="item in pictures" :key="item.id">
      <picture-item :picture="item" />
      <div class="overlay"></div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Photo } from "../typings";
import PictureItem from "./PictureItem.vue";

defineProps<{
  pictures: Photo[];
  loading: boolean;
}>();
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.picture-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
  column-gap: 14px;
}

.picture-list > li {
  flex-basis: 350px;
  position: relative;
  cursor: pointer;
}

.picture-list::after {
  content: "";
  flex-basis: 350px;
}
</style>
