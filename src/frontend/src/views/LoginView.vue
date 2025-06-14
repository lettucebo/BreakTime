<!-- LoginView.vue 登入頁，MSAL 登入按鈕 -->
<template>
  <div class="container py-4 text-center">
    <h2><i class="fa-solid fa-right-to-bracket"></i> Login</h2>
    <button class="btn btn-primary" @click="login"><i class="fa-brands fa-microsoft"></i> Sign in with Microsoft</button>
  </div>
</template>
<script lang="ts" setup>
function login() {
  // ...呼叫 MSAL 登入...
}
</script>
