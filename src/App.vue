<script setup lang="ts">
import { ref } from "vue";
import { VueDraggable } from "vue-draggable-plus";
import Tile from "./components/Tile.vue";
import { randomHslColor } from "./utils/randomHslColor";
import BaseButton from "./components/BaseButton.vue";
import EditColorDialog from "./components/EditColorDialog.vue";

type Tile = { id: number; backgroundColor: string };

let dialogId = 0;
let activeTileID: number;
const tileList = ref<Tile[]>([]);
const colorDialog = ref<{ dialog: HTMLDialogElement }>();

const addTile = () => {
  tileList.value.push({ id: dialogId++, backgroundColor: randomHslColor() });
};

const removeTile = (id: number) => {
  const tileId = tileList.value.findIndex((tile) => tile.id === id);
  tileList.value.splice(tileId, 1);
};

const openEditColorModal = (id: number) => {
  activeTileID = id;
  colorDialog.value?.dialog.showModal();
};

const updateTileColor = (inputColor: string) => {
  const tile = tileList.value.find((tile) => tile.id === activeTileID);
  if (tile) tile.backgroundColor = inputColor;
};
</script>

<template>
  <BaseButton @click="addTile" data-testid="addTileBtn">
    Dodaj kafelek
  </BaseButton>

  <VueDraggable
    ref="el"
    class="draggable-area"
    v-model="tileList"
    :animation="150"
  >
    <Tile
      v-for="tile in tileList"
      :key="tile.id"
      :tile="tile"
      :data-testid="`tile-${tile.id}`"
      @remove="removeTile"
      @edit="openEditColorModal"
    >
    </Tile>
  </VueDraggable>

  <EditColorDialog ref="colorDialog" @close="updateTileColor" />
</template>

<style lang="scss" scoped>
.draggable-area {
  border: 1px dashed #555;
  width: 100%;
  min-height: 70vh;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
