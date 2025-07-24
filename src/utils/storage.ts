// src/utils/storage.ts
const GAME_HISTORY_KEY = "gameHistory";

export function saveGameHistory(history: any[]) {
  localStorage.setItem(GAME_HISTORY_KEY, JSON.stringify(history));
}

export function loadGameHistory(): any[] {
  const data = localStorage.getItem(GAME_HISTORY_KEY);
  return data ? JSON.parse(data) : [];
}
