// src/types/index.ts
// 全域型別定義
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface BreakType {
  id: string;
  name: string;
  defaultDuration: number; // 單位：秒
}

export interface Timer {
  id: string;
  breakTypeId: string;
  startTime: string;
  endTime: string;
  timezones: string[];
}
