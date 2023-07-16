<template>
  <Header />
  <div class="search-wrapper">
    <div class="search-center">
      <Search v-model:model-value="search" @fetchData="fetchData" />
    </div>
  </div>
  <picture-list
    :pictures="getData"
    :loading="getLoading"
    style="margin-top: 45px"
  />
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUnsplashStore } from "../store";
import Header from "./Header.vue";
import Search from "./Search.vue";
import PictureList from "./PictureList.vue";

const { fetchData } = useUnsplashStore();
const { getData, getLoading } = storeToRefs(useUnsplashStore());

const search = ref<string>("");

onMounted(async () => {
  await fetchData();
});
</script>

<style lang="scss" scoped>
.search-wrapper {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../../assets/wallpaperbetter.jpg");
  background-size: cover;
}

.search-center {
  width: 866px;
  margin: 0 10px 0 10px;
  position: relative;
  z-index: 2;
}
</style>
relative
