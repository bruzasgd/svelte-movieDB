import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'main',
  repo: 'https://github.com/bruzasgd/svelte-movieDB', // Update to point to your repository
  user: {
   name: 'Gediminas von Br', // update to use your name
   email: 'bruzasgd@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);