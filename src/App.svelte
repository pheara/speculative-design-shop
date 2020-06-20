<script>
  import 'bulma/css/bulma.css'
  //   import { Button } from 'svelma'
  import Button from 'svelma/src/components/Button.svelte'
  import Gallery from './Gallery.svelte'
  import Navbar from './Navbar.svelte'
  export let name
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Navbar />

<main>

  <section id="product" class="columns section">
    <Gallery class="column is-one-quarter" />
  </section>

  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>

<Button type="is-primary">I'm a Button!</Button>
