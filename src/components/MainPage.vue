<template>
  <div class="layout">
    <div class="sidebar">
      <Sidebar v-if="balances" :balances="balances" />
    </div>
    <div class="game-grid">
      <GameGrid />
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

onMounted(() => {
  apiClient
    .get("/users/me/balance", {
      params: { auth: localStorage.getItem("authToken") },
    })
    .then((res) => {
      balances.value = formatBalances(res.data.data);
    });
});
</script>

<style scoped>
.layout {
  display: flex;
  width: 100%;
}
.sidebar {
  width: 30%;
  max-width: 300px;
}
.game-grid {
  width: 100%;
}
</style>
