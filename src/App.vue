<template>
  <Toast />
  <RouterView @tokenIssueLogout="showWarning" />
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const showWarning = () => {
  toast.add({
    severity: "warn",
    summary: "Login again",
    detail: "There was an issue with your refresh token. Please, login again",
    life: 5000,
  });
};
</script>

<style scoped></style>
<!-- TODO: DOCKER -->
