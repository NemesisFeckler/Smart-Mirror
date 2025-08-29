export const INACTIVITY_LIMIT_MS = 120000;

export function trackInactivity(callback, timeout = INACTIVITY_LIMIT_MS) {
  let timer;

  function reset() {
    clearTimeout(timer);
    timer = setTimeout(callback, timeout);
  }

  function start() {
    reset();
    window.addEventListener('mousemove', reset);
    window.addEventListener('click', reset);
  }

  function stop() {
    clearTimeout(timer);
    window.removeEventListener('mousemove', reset);
    window.removeEventListener('click', reset);
  }

  return { start, stop, reset };
}
