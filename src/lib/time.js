import { readable } from 'svelte/store';

export function formatTime(date) {
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(date);
}

export function formatDateLong(date) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export const time = readable({ now: new Date() }, (set) => {
  const interval = setInterval(() => {
    set({ now: new Date() });
  }, 1000);
  return () => clearInterval(interval);
});
