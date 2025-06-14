<!-- HomeView.vue 首頁，休息時間類型選擇、倒數設定、開始計時 -->
<template>
  <div class="container py-4">
    <h1 class="mb-4"><i class="fa-solid fa-mug-hot"></i> BreakTime</h1>
    <div class="mb-3">
      <label for="breakType" class="form-label">Break Type</label>
      <select id="breakType" class="form-select" v-model="selectedType">
        <option v-for="type in breakTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="duration" class="form-label">Duration (minutes)</label>
      <input id="duration" type="number" class="form-control" v-model.number="duration" min="1" max="120" />
    </div>
    <button class="btn btn-primary" @click="startTimer"><i class="fa-solid fa-play"></i> Start</button>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const breakTypes = computed(() => store.state.settings.breakTypes);
const selectedType = ref(breakTypes.value.length ? breakTypes.value[0].id : '');
const duration = ref(5);

function startTimer() {
  // ...建立 timer 並導向倒數頁...
  router.push({ name: 'Timer', params: { id: 'demo' } });
}
</script>
