<template>
  <h1>Login</h1>

  <form @submit.prevent :onsubmit="onLogin" class="card form">
    <input type="text" placeholder="Username" v-model="loginData.userName" />
    <input
      type="password"
      name=""
      id=""
      placeholder="Password"
      v-model="loginData.password"
    />
    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import apiClient from "../api-client";
import { AxiosResponse } from "axios";
import router from "../router";
import { useRoute } from "vue-router";

const loginData = ref({
  userName: "",
  password: "",
});

const emit = defineEmits(["tokenIssueLogout"]);
const route = useRoute();
onMounted(() => {
  if (route.params.error === "422") emit("tokenIssueLogout");
});
const onSuccessLogin = (res: AxiosResponse) => {
  // localStorage.setItem("userId", res.data.data[0].id);
  localStorage.setItem("authToken", res.data.data[0].attributes.token);
  localStorage.setItem(
    "refreshToken",
    res.data.data[0].attributes["refresh-token"]
  );
  router.push({ name: "main" });
};

const onLogin = () => {
  apiClient
    .post("/login", {
      login: loginData.value.userName,
      password: loginData.value.password,
    })
    .then((res: AxiosResponse) => {
      onSuccessLogin(res);
    });
};
</script>

<style scoped>
.form {
  display: flex;
  gap: 10px;
}
</style>
