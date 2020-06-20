<script>
  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
  //   import { Button } from 'svelma'
  //   import Button from 'svelma/src/components/Button.svelte'
  import Gallery from './Gallery.svelte'
  import MainDescription from './MainDescription.svelte'
  import Navbar from './Navbar.svelte'
  //   export let name
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
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
    <MainDescription class="column is-half" />

  </section>
</main>
