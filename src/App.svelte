<script>
  import Router from 'svelte-spa-router';
  import Home from './components/Home.svelte';
  import Dashboard from './components/Dashboard.svelte';

  const routes = {
    '/': Home,
    '/dashboard': Dashboard
  };
</script>

<Router {routes} />
