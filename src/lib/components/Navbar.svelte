<script>
  import { Link } from 'svelte-navigator';
  import { user } from '$lib/store';
  import Menu from '$svg/Menu.svelte';
</script>

<section class="bg-slate-800">
  <div class="container max-w-screen-xl py-4 px-4 2xl:px-0">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl md:text-4xl font-bold text-teal-500">Blogify</h1>
      </div>
      <div class="hidden md:flex md:items-center">
        <Link to="/" class="hover:animate-pulse">Home</Link>
        <Link to="/add" class="mx-4 hover:animate-pulse">Add</Link>
        <Link to="/about" class="hover:animate-pulse">About</Link>
      </div>
      <div class="hidden md:block">
        {#if $user.loggedIn}
          <button
            class="btn"
            on:click={() => {
              $user.loggedIn = false;
              $user.email = '';
              $user.username = '';
            }}>Log Out</button
          >
        {:else}
          <Link to="/login">
            <button class="btn-outline">Log In</button>
          </Link>
        {/if}
      </div>
      <div class="block md:hidden">
        <Menu />
      </div>
    </div>
    <div class="block md:hidden collapse" id="collapseExample">
      <div
        class="flex flex-col space-y-6 bg-slate-800 divide-y divide-teal-700 p-6 rounded-lg mt-4"
      >
        <Link to="/" class="hover:animate-pulse text-lg">Home</Link>
        <Link to="/add" class="hover:animate-pulse text-lg">Add</Link>
        <Link to="/about" class="hover:animate-pulse text-lg">About</Link>
        {#if $user.loggedIn}
          <button
            class="btn w-full"
            on:click={() => {
              $user = {
                loggedIn: false,
                email: '',
                id: '',
                username: '',
              };
            }}>Log Out</button
          >
        {:else}
          <Link to="/login">
            <button class="btn-outline mt-4 w-full">Log In</button>
          </Link>
        {/if}
      </div>
    </div>
  </div>
</section>
