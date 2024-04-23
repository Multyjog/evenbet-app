<template>
  <div class="avatar">
    <img src="https://picsum.photos/200" alt="" />
  </div>
  <br />
  <div class="balance" v-for="balance in balances" :key="balance.id">
    Currency: <strong>{{ balance.currency }}</strong>
    <br />
    Total balance: <strong>{{ balance.balance }}</strong>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { IFormattedBalance } from "../interfaces";

defineProps({
  balances: {
    type: Object as PropType<IFormattedBalance[]>,
    required: true, // or false, depending on your needs
  },
});
</script>

<style>
.avatar {
  display: flex;
  padding: 10px;
  border: 10px solid gray;
  border-radius: 100%;
}
img {
  border-radius: 100%;
}
.balance {
  margin-bottom: 10px;
}
</style>
