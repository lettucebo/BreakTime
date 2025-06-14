// src/store/modules/user.ts
// 用戶狀態管理模組
// 不使用 Module 型別，直接導出物件
import type { User } from '../../types';

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}

const state: UserState = {
  user: null,
  isAuthenticated: false,
};

const user = {
  namespaced: true,
  state,
  mutations: {
    setUser(state: UserState, user: User) {
      state.user = user;
      state.isAuthenticated = true;
    },
    clearUser(state: UserState) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  actions: {},
  getters: {},
};

export default user;
