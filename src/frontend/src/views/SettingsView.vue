<!-- SettingsView.vue 設定頁，管理休息類型與時區 -->
<template>
  <div class="container py-4">
    <h2><i class="fa-solid fa-gear"></i> Settings</h2>
    <div class="mb-3">
      <label class="form-label">Break Types</label>
      <ul class="list-group mb-2">
        <li v-for="type in breakTypes" :key="type.id" class="list-group-item d-flex justify-content-between align-items-center">
          {{ type.name }}
          <button class="btn btn-sm btn-danger" @click="removeType(type.id)"><i class="fa-solid fa-trash"></i></button>
        </li>
      </ul>
      <input v-model="newType" class="form-control mb-2" placeholder="Add new break type" />
      <button class="btn btn-success" @click="addType"><i class="fa-solid fa-plus"></i> Add</button>
    </div>
    <div class="mb-3">
      <label class="form-label">Timezones</label>
      <input v-model="newTimezone" class="form-control mb-2" placeholder="Add timezone (e.g. Europe/London)" />
      <button class="btn btn-info" @click="addTimezone"><i class="fa-solid fa-plus"></i> Add</button>
      <ul class="list-group mt-2">
        <li v-for="tz in timezones" :key="tz" class="list-group-item d-flex justify-content-between align-items-center">
          {{ tz }}
          <button class="btn btn-sm btn-danger" @click="removeTimezone(tz)"><i class="fa-solid fa-trash"></i></button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const breakTypes = computed(() => store.state.settings.breakTypes);
const timezones = computed(() => store.state.settings.timezones);
const newType = ref('');
const newTimezone = ref('');
function addType() { /* ... */ }
function removeType(id: string) { /* ... */ }
function addTimezone() { /* ... */ }
function removeTimezone(tz: string) { /* ... */ }
</script>
