<template>
  <div class="search-container">
    <form @submit.prevent="$emit('fetchData', modelValue)">
      <input
        type="text"
        placeholder="Поиск"
        name="search"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target?.value)"
      />
      <button type="submit">
        <svg-icon name="search"></svg-icon>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/icons/SvgIcon.vue";

defineProps(["modelValue"]);
defineEmits(["update:modelValue", "fetchData"]);
</script>

<style lang="scss" scoped>
input[type="text"] {
  display: block;
  width: calc(100% - 24px);
  font-size: 16px;
  font-weight: 400;
  color: $black;
  padding: 10px;
  border: 2px solid $white;
  outline: none;
}

.search-container {
  position: relative;
}
.search-container button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 50px;
  background: transparent;
  border: transparent;
  font-size: 12px;
  color: $black;
  cursor: pointer;
  outline: 0;
}
</style>
