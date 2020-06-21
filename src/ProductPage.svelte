<script>
  import Gallery from './Gallery.svelte'
  import MainDescription from './MainDescription.svelte'
  import Navbar from './Navbar.svelte'
  import CheckoutBox from './CheckoutBox.svelte'
  import ProductCard from './ProductCard.svelte'
  import ProductCardRow from './ProductCardRow.svelte'

  import { shuffleArray, filterObject } from './utils.js'

  import ProductPage from './ProductPage.svelte'

  export let id = undefined

  import { products } from './data.js'
  //   const product = products[Object.keys(products)[0]] // just use first product for now
  //   let product = = products['0ac55dd3']
  $: product = products[id]
  $: productImages = product.images

  $: productRecommendations = shuffleArray(
    Object.values(products).filter((p) => p !== product),
  )

  //   const product = products['0ac55dd3']
  //   const productImages = product.images
</script>

<section id="product" class="columns section">
  <Gallery class="column is-one-quarter" {productImages} />
  <MainDescription class="column is-half" {...product} />
  <CheckoutBox class="column is-one-quarter" price={product.priceEUR} />
</section>

<hr />

<section>
  <h2 class="title is-4">Similar Products</h2>
  <ProductCardRow products={productRecommendations} />
</section>
