<template>
  <div class="avatar">
    <Avatar image="https://picsum.photos/200" size="xlarge" shape="circle" />
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
import Avatar from "primevue/avatar";

defineProps({
  balances: {
    type: Object as PropType<IFormattedBalance[]>,
    required: true,
  },
});
</script>

<style scoped>
.avatar {
  display: flex;
  justify-content: center;
}
img {
  border-radius: 100%;
}
.balance {
  margin-bottom: 10px;
}
</style>
