<script>
  import { time, formatTime, formatDateLong } from '../lib/time.js';
  import { onMount, onDestroy } from 'svelte';
  import { push as goto } from 'svelte-spa-router';
  import { trackInactivity, INACTIVITY_LIMIT_MS } from '../lib/navigation.js';

  let tracker;

  onMount(() => {
    tracker = trackInactivity(() => goto('/'), INACTIVITY_LIMIT_MS);
    tracker.start();
  });

  onDestroy(() => {
    tracker.stop();
  });
</script>

<div class="dashboard">
  <header class="header">
    <h1 class="date">{formatDateLong($time.now)}</h1>
    <div class="time">{formatTime($time.now)}</div>
  </header>
  <div class="categories">
    <div class="category">
      <h2>Daily</h2>
      <div class="placeholder"></div>
    </div>
    <div class="category">
      <h2>Weekly</h2>
      <div class="placeholder"></div>
    </div>
    <div class="category">
      <h2>Monthly</h2>
      <div class="placeholder"></div>
    </div>
  </div>
</div>

<style>
  .dashboard {
    padding: 1rem;
  }
  .header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: start;
    width: 100%;
  }
  .date {
    grid-column: 2;
    justify-self: center;
    font-size: clamp(24px, 5vw, 48px);
  }
  .time {
    grid-column: 3;
    justify-self: end;
    font-size: clamp(20px, 4vw, 32px);
  }
  .categories {
    display: flex;
    justify-content: space-evenly;
    margin-top: 24px;
    text-align: center;
  }
  .category h2 {
    text-decoration: underline;
    margin-bottom: 12px;
    font-size: clamp(20px, 4vw, 28px);
  }
  .placeholder {
    min-height: 100px;
  }
  @media (max-width: 480px) {
    .categories {
      flex-direction: column;
      gap: 12px;
    }
  }
</style>
