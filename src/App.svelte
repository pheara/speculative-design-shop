<script>
  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
  //   import { Button } from 'svelma'
  //   import Button from 'svelma/src/components/Button.svelte'

  import { Router, Link, Route, router } from 'yrv'
  Router.hashchange = true //enable hash-based routing
  //   router.hashchange = true //enable hash-based routing
  //   export let url = ''

  import Gallery from './Gallery.svelte'
  import MainDescription from './MainDescription.svelte'
  import Navbar from './Navbar.svelte'
  import CheckoutBox from './CheckoutBox.svelte'
  import ProductCard from './ProductCard.svelte'
  import ProductCardRow from './ProductCardRow.svelte'

  import ProductPage from './ProductPage.svelte'

  import { products } from './data.js'
  //   const product = products[Object.keys(products)[0]] // just use first product for now
  const product = products['0ac55dd3']
  const productImages = product.images

  window.location.hash // e.g. #product/abc123
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

<!-- <Link href="/">Home</Link>
|
<Link href="/World">Hello</Link>
|
<Link href="/not/found">NotFound</Link> -->

<main>

  <Router>
    <!-- <Route exact>Hello World</Route> -->
    <Route exact redirect="/0ac55dd3" />
    <Route fallback>Product not found</Route>
    <Route exact path="/:id" let:router>
      <ProductPage id={router.params.id} />
    </Route>
  </Router>

</main>
