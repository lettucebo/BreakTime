<!-- TimerView.vue 倒數計時頁，顯示倒數、QRCode、多時區 -->
<template>
  <div class="timer-fullwidth py-4">
    <div class="text-center mb-4">
      <h2 class="display-5 fw-bold text-primary"><i class="fa-solid fa-hourglass-half me-2"></i>Countdown</h2>
      <div class="countdown-circle mx-auto my-4 d-flex align-items-center justify-content-center shadow-lg"
           :class="{ 'bg-dark text-light': isDark, 'bg-light text-dark': !isDark }"
           aria-live="polite">
        <span class="display-1 fw-bold">{{ countdown }}</span>
      </div>
    </div>
    <div class="row g-4 w-100 mx-0">
      <div class="col-lg-7 col-md-8 col-12">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-header bg-gradient bg-primary text-white fw-bold">
            <i class="fa-solid fa-globe me-2"></i>Timezones
          </div>
          <div class="card-body p-0">
            <ul class="tz-list">
              <li v-for="tz in timezones" :key="tz" class="tz-list-item d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <span class="tz-dot me-2"></span>
                  <span class="tz-label">{{ tz }}</span>
                </div>
                <span class="tz-time">{{ getTimezoneCountdown(tz) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-4 col-12">
        <div class="card h-100 border-0 shadow-sm text-center">
          <div class="card-header bg-gradient bg-success text-white fw-bold">
            <i class="fa-solid fa-qrcode me-2"></i>Share
          </div>
          <div class="card-body d-flex flex-column align-items-center justify-content-center">
            <img :src="qrcodeUrl" alt="QR Code for sharing timer" class="img-fluid rounded shadow" style="max-width: 180px;" />
            <div class="mt-2 text-muted small">Scan to open this timer</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
const duration = 5 * 60; // 5 分鐘，實際可從 route 取得
const remaining = ref(duration);
const countdown = ref('05:00');
const timezones = ref(['Asia/Taipei', 'UTC', 'America/New_York']);
const qrcodeUrl = ref('https://api.qrserver.com/v1/create-qr-code/?data=https://breaktime.example.com/timer/demo&size=150x150');
let timer: number | null = null;
const endTimestamp = ref(Date.now() + duration * 1000);
const isDark = computed(() => document.documentElement.getAttribute('data-bs-theme') === 'dark');

function format(sec: number) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function tick() {
  if (remaining.value > 0) {
    remaining.value--;
    countdown.value = format(remaining.value);
  } else if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

onMounted(() => {
  countdown.value = format(remaining.value);
  endTimestamp.value = Date.now() + remaining.value * 1000;
  timer = setInterval(tick, 1000);
});
onUnmounted(() => {
  if (timer) clearInterval(timer);
});

function getTimezoneCountdown(tz: string) {
  try {
    const utc = new Date(endTimestamp.value);
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit', minute: '2-digit',
      hour12: false, timeZone: tz
    };
    return utc.toLocaleTimeString('en-US', options);
  } catch {
    return '-';
  }
}
</script>
<style scoped>
.timer-fullwidth {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0 0.5rem;
  background: none;
  box-sizing: border-box;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.countdown-circle {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  box-shadow: 0 8px 32px rgba(60,60,120,0.15);
  transition: background 0.3s, color 0.3s;
}
[data-bs-theme='dark'] .countdown-circle {
  background: linear-gradient(135deg, #232946 0%, #121629 100%);
  color: #fff;
}
.card-header {
  font-size: 1.15rem;
  letter-spacing: 0.02em;
}
.tz-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.tz-list-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 0.5rem;
  font-size: 1.08rem;
  background: transparent;
  transition: background 0.2s;
  min-width: 0;
  gap: 0.5rem;
}
.tz-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #00e0d3 100%);
  display: inline-block;
  margin-right: 0.5rem;
}
.tz-label {
  font-weight: 500;
  color: #232946;
  min-width: 180px;
  max-width: 320px;
  word-break: break-all;
  margin-right: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tz-time {
  font-family: 'JetBrains Mono', 'Consolas', monospace;
  font-size: 1.1rem;
  background: #f3f4f6;
  color: #2563eb;
  border-radius: 0.5rem;
  padding: 0.2rem 1.2rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  min-width: 90px;
  max-width: 90px;
  text-align: right;
  justify-self: end;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media (max-width: 600px) {
  .tz-list-item {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 0.2rem;
  }
  .tz-label {
    margin-right: 0;
    max-width: 100%;
    white-space: normal;
  }
  .tz-time {
    margin-left: 0;
    margin-top: 0.3rem;
    width: 100%;
    text-align: left;
    max-width: 100%;
    white-space: normal;
    justify-content: flex-start;
  }
}
</style>
