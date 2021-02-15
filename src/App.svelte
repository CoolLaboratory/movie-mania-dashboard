<script>
  import {currentView} from './stores/appStore'
</script>

<nav>
  <a href="/">Home</a> |
  <a href="/about">About</a> |
  <a href="/auth/login">Login</a> |
  <a href="/auth/register">Register</a> |
  <a href="/no-page">unExisted</a> 
</nav>
<svelte:component this={$currentView} />