<script lang="ts">
  import { userApi } from '$lib/api/userApi';

  import type { ValidUser } from '$lib/interfaces';
  import { ErrorToast, SuccessToast } from '$lib/toasts';

  import { Link, useNavigate } from 'svelte-navigator';
  import JSConfetti from 'js-confetti';
  import { user } from '$lib/store';

  let email: string;
  let password: string;
  const navigate = useNavigate();
  const jsConfetti = new JSConfetti();

  async function login(): Promise<void> {
    const reqBody: ValidUser = { email, password };
    try {
      const validUserResp = await userApi.validUser(reqBody);
      if (validUserResp.status === 'OK') {
        $user = {
          loggedIn: true,
          email: validUserResp.email,
          id: validUserResp._id,
          username: validUserResp.name,
        };
        navigate('/');
        SuccessToast(`Welcome ${validUserResp.name}.`);
        await jsConfetti.addConfetti();
      } else {
        ErrorToast('Invalid user info.');
      }
    } catch (error) {
      ErrorToast('Something happened.Try again.');
    }
  }
</script>

<section class="container max-w-screen-2xl flex justify-center">
  <div
    class="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100"
  >
    <div class="mb-8 text-center">
      <h1 class="my-3 text-4xl font-bold">Log in</h1>
      <p class="text-sm dark:text-gray-400">Log in to access your account</p>
    </div>
    <form class="space-y-12 ng-untouched ng-pristine ng-valid">
      <div class="space-y-4">
        <div>
          <label for="email" class="block mb-2 text-sm">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            bind:value={email}
            placeholder="your@mail.com"
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
            bind:value={password}
            placeholder="*****"
            class="input"
          />
        </div>
      </div>
      <div class="space-y-2">
        <div>
          <button
            type="button"
            class="w-full px-8 py-3 font-semibold rounded-md dark:bg-teal-400 dark:text-gray-900"
            on:click={login}>Log in</button
          >
        </div>
        <p class="px-6 text-sm text-center dark:text-gray-400">
          Don't have an account yet?
          <Link to="/signup" class="hover:underline dark:text-teal-400"
            >Sign Up</Link
          >.
        </p>
      </div>
    </form>
  </div>
</section>
