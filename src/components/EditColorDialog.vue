<script setup lang="ts">
import { ref } from "vue";
import { hexRegex } from "../utils/hexRegex";

const dialog = ref<HTMLDialogElement>();
const inputColor = ref("");

const emit = defineEmits<{
  close: [inputColor: string];
}>();

defineExpose({ dialog });

const closeDialog = () => {
  if (hexRegex.test(inputColor.value)) {
    dialog.value?.close();
    emit("close", inputColor.value);
    inputColor.value = "";
  } else {
    alert("Niepoprawny HEX kolor - spróbuj '#FFC0CB' :)");
  }
};
</script>

<template>
  <dialog ref="dialog" class="dialog">
    <label>Podaj kolor w formacie HEX:</label>
    <input type="text" v-model="inputColor" />
    <button @click="closeDialog">Zatwierdz</button>
  </dialog>
</template>

<style lang="scss" scoped>
.dialog {
  position: relative;
  flex-direction: column;
  gap: 10px;
  padding: 40px 20px;

  &[open] {
    display: flex;
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
