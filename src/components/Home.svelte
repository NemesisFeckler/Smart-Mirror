<script>
  import { time, formatTime, formatDateLong } from '../lib/time.js';
</script>

<div class="container">
  <h1 class="date">{formatDateLong($time.now)}</h1>
  <h2 class="clock">{formatTime($time.now)}</h2>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
  .date {
    font-size: clamp(36px, 10vw, 64px);
  }
  .clock {
    font-size: clamp(48px, 12vw, 96px);
  }
</style>
