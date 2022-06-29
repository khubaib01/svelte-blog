<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import Navbar from '$components/Navbar.svelte';
  import Home from '$pages/Home.svelte';
  import Login from '$pages/Login.svelte';
  import Signup from '$pages/Signup.svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<Router>
  <SvelteToast />
  <Navbar />
  <Route path="/">
    <Home />
  </Route>
  <Route path="/login">
    <Login />
  </Route>
  <Route path="/signup">
    <Signup />
  </Route>
</Router>
