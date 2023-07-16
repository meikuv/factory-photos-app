<template>
  <div class="header-section">
    <header class="header">
      <router-link :to="{ name: 'home' }">
        <svg-icon name="artGalery" class="logo" />
      </router-link>
      <router-link
        :to="{ name: 'favourites' }"
        style="text-decoration: none; color: inherit"
      >
        <div class="favourites">
          <svg-icon name="favourite" class="fav-icon" :color="'white'" />
          <span class="fav-text">Избранное</span>
        </div>
      </router-link>
    </header>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from "@/components/icons/SvgIcon.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 148px;
  box-sizing: border-box;
  padding: 30px 10%;
  background-color: $black;

  &-section {
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgb(0 0 0 / 8%);
  }
}

.logo {
  cursor: pointer;
  width: 185px;
  height: 72px;
}

.favourites {
  text-align: center;
  color: $white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;

  .fav-icon {
    vertical-align: middle;
    width: 25px;
    height: 22px;
  }

  .fav-icon + .fav-text {
    margin-left: 10px;
  }
}

@media only screen and (max-width: 600px) {
  .header {
    height: 80px;
    padding: 10px 5%;
  }

  .logo {
    width: 84px;
    height: 42px;
  }

  .fav-text {
    display: none;
  }
}
</style>
