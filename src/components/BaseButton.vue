<script setup lang="ts"></script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  color: #f8f8f8;
  background-color: #222;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
</style>
