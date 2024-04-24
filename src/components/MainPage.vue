<template>
  <div class="layout">
    <div class="sidebar">
      <Sidebar v-if="balances" :balances="balances" />
    </div>
    <div class="game-grid">
      <GameGrid :games="games" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./SidebarComponent.vue";
import GameGrid from "./GameGrid.vue";
import { onMounted, ref } from "vue";
import apiClient from "../api-client";
import { formatBalances } from "../services/balanceService";

const balances = ref();
const games = ref();

onMounted(() => {
  apiClient
    .get("/users/me/balance", {
      params: { auth: localStorage.getItem("authToken") },
    })
    .then((res) => {
      balances.value = formatBalances(res.data.data);
    });
  apiClient.get("/casino/games").then((res) => {
    // console.log(res.data.data.slice(0, 20));
    games.value = res.data.data.slice(0, 20);
  });
});
</script>

<style scoped>
.layout {
  display: flex;
  gap: 20px;
  width: 100%;
}
.sidebar {
  width: 20%;
  max-width: 250px;
}
.game-grid {
  width: 100%;
}
@media only screen and (max-width: 400px) {
  .sidebar {
    width: 40%;
  }
}
</style>
