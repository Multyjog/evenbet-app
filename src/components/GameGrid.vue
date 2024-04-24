<template>
  <div class="gamegrid row" v-if="games">
    <GameCardComponent v-for="game in games" :key="game.id" :game="game" />
  </div>
  <div class="spinner" v-else><ProgressSpinner /></div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IGame } from "../interfaces";
import GameCardComponent from "./GameCardComponent.vue";
import ProgressSpinner from "primevue/progressspinner";

defineProps({
  games: {
    type: Array as PropType<IGame[]>,
    required: false,
  },
});
</script>

<style scoped>
.gamegrid {
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 650px) {
  .gamegrid {
    justify-content: center;
  }
}
</style>
