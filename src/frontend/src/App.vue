<script setup lang="ts">
// App.vue: 全域主題切換、路由出口、導覽列
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const darkMode = ref(false);
function toggleTheme() {
  darkMode.value = !darkMode.value;
  document.documentElement.setAttribute('data-bs-theme', darkMode.value ? 'dark' : 'light');
}
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4" :class="{ 'bg-dark navbar-dark': darkMode }">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><i class="fa-solid fa-mug-hot"></i> BreakTime</a>
      <button class="btn btn-outline-secondary ms-auto" @click="toggleTheme" aria-label="Toggle theme">
        <i :class="darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" aria-hidden="true"></i>
      </button>
    </div>
  </nav>
  <main class="app-main-fullwidth">
    <router-view />
  </main>
</template>
<style scoped>
body, html {
  min-height: 100vh;
}
#app {
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background: none;
}
.app-main-fullwidth {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: none;
  box-sizing: border-box;
  overflow-x: hidden;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
