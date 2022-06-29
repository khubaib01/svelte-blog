<script lang="ts">
  import type { User } from '$lib/interfaces';
  import { userApi } from '$lib/api/userApi';
  import { Link, useNavigate } from 'svelte-navigator';
  import JSConfetti from 'js-confetti';
  import { ErrorToast, SuccessToast } from '$lib/toasts';

  const jsConfetti = new JSConfetti();
  const navigate = useNavigate();
  let username: string;
  let email: string;
  let password: string;

  async function signup(): Promise<void> {
    const newUser: User = {
      name: username,
      email,
      password,
    };
    try {
      const resp = await userApi.addUser(newUser);
      await jsConfetti.addConfetti();
      SuccessToast(`User created with email ${resp.email}. Login please.`);
      navigate('/login');
    } catch (error) {
      ErrorToast('Error creating user.');
    }
  }
</script>

<section class="container max-w-screen-2xl flex justify-center">
  <div
    class="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100"
  >
    <div class="mb-8 text-center">
      <h1 class="my-3 text-4xl font-bold">Sign up</h1>
      <p class="text-sm dark:text-gray-400">Sign up to create your account</p>
    </div>
    <form class="space-y-12 ng-untouched ng-pristine ng-valid">
      <div class="space-y-4">
        <div>
          <label for="username" class="block mb-2 text-sm">Display name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="xyz"
            bind:value={username}
            class="input"
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="fake@mail.com"
            bind:value={email}
            class="input"
          />
        </div>
        <div>
          <div class="flex justify-between mb-2">
            <label for="password" class="text-sm">Password</label>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*****"
            bind:value={password}
            class="input"
          />
        </div>
      </div>
      <div class="space-y-2">
        <div>
          <button
            type="button"
            class="w-full px-8 py-3 font-semibold rounded-md dark:bg-teal-400 dark:text-gray-900"
            on:click={signup}>Sign Up</button
          >
        </div>
        <p class="px-6 text-sm text-center dark:text-gray-400">
          Already have an account?
          <Link to="/login" class="hover:underline dark:text-teal-400"
            >Log In</Link
          >.
        </p>
      </div>
    </form>
  </div>
</section>
