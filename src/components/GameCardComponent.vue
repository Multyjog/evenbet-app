<template>
  <Card class="card">
    <template #header>
      <img class="img" alt="user header" :src="game.attributes.image" />
    </template>
    <template #content>
      <div class="card-body">
        <h3>{{ game.attributes.title }}</h3>
        <Button label="Play Demo" class="button" severity="success" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IGame } from "../interfaces";
import Card from "primevue/card";
import Button from "primevue/button";

defineProps({
  game: {
    type: Object as PropType<IGame>,
    required: true,
  },
});
</script>

<style scoped>
.card {
  max-width: 24%;
  min-width: 250px;
  width: 100%;
  border-radius: 5px;
  background-color: #e9e9e9;
}
.img {
  object-fit: cover;
  width: 100%;
  height: 250px;
}
.card-body {
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
}

@media only screen and (max-width: 1620px) {
  .card {
    width: 30%;
    max-width: 400px;
  }
}
@media only screen and (max-width: 964px) {
  .card {
    width: 49%;
    max-width: 500px;
  }
}
@media only screen and (max-width: 650px) {
  .card {
    width: 90%;
    max-width: 400px;
  }
}
</style>
