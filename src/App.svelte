<script>
  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
  //   import { Button } from 'svelma'
  //   import Button from 'svelma/src/components/Button.svelte'
  import Gallery from './Gallery.svelte'
  import MainDescription from './MainDescription.svelte'
  import Navbar from './Navbar.svelte'
  import CheckoutBox from './CheckoutBox.svelte'
  import ProductCard from './ProductCard.svelte'
  import ProductCardRow from './ProductCardRow.svelte'

  import { products } from './data.js'
  //   const product = products[Object.keys(products)[0]] // just use first product for now
  const product = products['0ac55dd3']
  const productImages = product.images
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
    <Gallery class="column is-one-quarter" {productImages} />
    <MainDescription class="column is-half" {...product} />
    <CheckoutBox class="column is-one-quarter box" price={product.priceEUR} />
  </section>

  <hr />

  <section>
    <h2 class="title is-4">Similar Products</h2>
    <ProductCardRow />
  </section>
</main>
