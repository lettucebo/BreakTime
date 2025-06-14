// src/store/index.ts
// Vuex Store 設定，包含用戶、設定、計時器等模組
import { createStore } from 'vuex';
import user from './modules/user';
import settings from './modules/settings';
import timer from './modules/timer';

const store = createStore({
  modules: {
    user,
    settings,
    timer,
  },
});

export default store;
