<script lang="ts">
  import { postApi } from '$lib/api/postApi';

  import type { IPost } from '$lib/interfaces';
  import { ErrorToast, SuccessToast } from '$lib/toasts';
  import JSConfetti from 'js-confetti';
  import { useNavigate } from 'svelte-navigator';

  let title: string;
  let tags: string;
  let postbody: string;
  const jsConfetti = new JSConfetti();
  const navigate = useNavigate();

  async function post(): Promise<void> {
    const newPost: IPost = { title, tags, body: postbody };
    try {
      const addedPost: IPost = await postApi.addPost(newPost);
      if (addedPost._id) {
        await jsConfetti.addConfetti();
        navigate('/');
        SuccessToast('Post added. We are in homepage.');
      } else {
        ErrorToast('Something happened. Try again.');
      }
    } catch (error) {
      ErrorToast('Something happened. Try again.');
    }
  }
</script>

<section class="container max-w-screen-xl mt-8">
  <div class="flex flex-col items-start gap-y-7 mx-4 md:mx-0">
    <h1 class="fade-in-top text-2xl md:text-5xl">Add Post</h1>
    <div class="w-full">
      <label for="title" class="text-lg">Post title</label><input
        type="text"
        name="title"
        bind:value={title}
        placeholder="Post title"
        class="input text-lg mt-2"
      />
    </div>
    <div class="w-full">
      <label for="tags" class="text-lg">Search hash tags</label><input
        type="text"
        name="tags"
        bind:value={tags}
        placeholder="Search tags"
        class="input text-lg mt-2"
      />
    </div>
    <div class="w-full">
      <label for="post" class="text-lg">Post body</label><textarea
        type="text"
        name="post"
        bind:value={postbody}
        placeholder="Post body"
        class="input text-lg mt-2 min-h-[300px]"
      />
    </div>
    <button class="btn-rounded w-full" on:click={post}>Post</button>
  </div>
</section>
