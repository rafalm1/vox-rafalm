<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

defineProps<{
  tile: {
    id: number;
    backgroundColor: string;
  };
}>();

const emit = defineEmits<{
  edit: [id: number];
  remove: [id: number];
}>();
</script>

<template>
  <div :style="{ backgroundColor: tile.backgroundColor }" class="tile">
    {{ tile.id }}
    <BaseButton @click="emit('edit', tile.id)" :data-testid="`edit-${tile.id}`">
      Zmień
    </BaseButton>
    <BaseButton
      @click="emit('remove', tile.id)"
      :data-testid="`remove-${tile.id}`"
    >
      Usuń
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.tile {
  width: 150px;
  height: 150px;
  margin: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  padding-top: 10px;
  cursor: move;

  button {
    width: 50%;
  }
}
</style>
