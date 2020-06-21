<script>
  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
  //   import { Button } from 'svelma'
  //   import Button from 'svelma/src/components/Button.svelte'

  import { Router, Link, Route } from 'svelte-routing'
  export let url = ''

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

<Router {url}>
  <Navbar />
  <!-- <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav> -->

  <main>

    <!-- <div>
    <Route path="blog/:id" component="{BlogPost}" />
    <Route path="blog" component="{Blog}" />
    <Route path="about" component="{About}" />
    <Route path="/"><Home /></Route>
  </div> -->
    <Route path="product/:id" let:params>
      <ProductPage id={params.id} />
    </Route>
    <Route path="/">
      <ProductPage id="0ac55dd3" />
    </Route>

  </main>

</Router>
