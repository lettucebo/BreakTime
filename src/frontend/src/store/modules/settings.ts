// src/store/modules/settings.ts
// 設定狀態管理模組
// 不使用 Module 型別，直接導出物件
import type { BreakType } from '../../types';

export interface SettingsState {
  breakTypes: BreakType[];
  defaultTimezone: string;
  timezones: string[];
}

const state: SettingsState = {
  breakTypes: [],
  defaultTimezone: 'Asia/Taipei',
  timezones: ['Asia/Taipei'],
};

const settings = {
  namespaced: true,
  state,
  mutations: {
    setBreakTypes(state: SettingsState, breakTypes: BreakType[]) {
      state.breakTypes = breakTypes;
    },
    setDefaultTimezone(state: SettingsState, timezone: string) {
      state.defaultTimezone = timezone;
    },
    setTimezones(state: SettingsState, timezones: string[]) {
      state.timezones = timezones;
    },
  },
  actions: {},
  getters: {},
};

export default settings;
