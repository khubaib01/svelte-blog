import { writable } from 'svelte/store';

interface User {
  loggedIn: boolean;
  id: string;
  email: string;
  username: string;
}

export const user = writable<User>(
  JSON.parse(
    localStorage.getItem('user') ||
      JSON.stringify({ loggedIn: false, id: '', email: '', username: '' })
  )
);

user.subscribe((value) => (localStorage.user = JSON.stringify(value)));
