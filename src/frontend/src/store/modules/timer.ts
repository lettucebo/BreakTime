// src/store/modules/timer.ts
// 計時器狀態管理模組
// 不使用 Module 型別，直接導出物件
import type { Timer } from '../../types';

export interface TimerState {
  currentTimer: Timer | null;
}

const state: TimerState = {
  currentTimer: null,
};

const timer = {
  namespaced: true,
  state,
  mutations: {
    setCurrentTimer(state: TimerState, timer: Timer) {
      state.currentTimer = timer;
    },
    clearCurrentTimer(state: TimerState) {
      state.currentTimer = null;
    },
  },
  actions: {},
  getters: {},
};

export default timer;
