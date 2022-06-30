<section
  class="container max-w-screen-xl flex flex-col items-start gap-y-7 mt-8"
>
  <h1 class="fade-in-top text-2xl md:text-5xl">Add Post</h1>
  <div class="w-full">
    <label for="title" class="text-lg">Post title</label><input
      type="text"
      name="title"
      placeholder="Post title"
      class="input text-lg mt-2"
    />
  </div>
  <div class="w-full">
    <label for="tags" class="text-lg">Search hash tags</label><input
      type="text"
      name="tags"
      placeholder="Search tags"
      class="input text-lg mt-2"
    />
  </div>
  <div class="w-full">
    <label for="post" class="text-lg">Post body</label><textarea
      type="text"
      name="post"
      placeholder="Post body"
      class="input text-lg mt-2 min-h-[300px]"
    />
  </div>
</section>
