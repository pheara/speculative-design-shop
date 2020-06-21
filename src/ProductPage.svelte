<script>
  import Gallery from './Gallery.svelte'
  import MainDescription from './MainDescription.svelte'
  import Navbar from './Navbar.svelte'
  import CheckoutBox from './CheckoutBox.svelte'
  import ProductCard from './ProductCard.svelte'
  import ProductCardRow from './ProductCardRow.svelte'
  import Comment from './Comment.svelte'

  import { shuffleArray, filterObject } from './utils.js'

  export let id = undefined

  import { products } from './data.js'
  $: product = products[id]
  $: productImages = product.images
  $: nrOfComments = product.comments ? product.comments.length : 0

  $: productRecommendations = shuffleArray(
    Object.values(products).filter((p) => p !== product),
  )
</script>

<section id="product" class="columns section">
  <Gallery class="column is-one-quarter" {productImages} />
  <MainDescription class="column is-half" {...product} {nrOfComments} />
  <CheckoutBox class="column is-one-quarter" price={product.priceEUR} />
</section>

<hr />

<section>
  <h2 class="title is-4">Similar Products</h2>
  <ProductCardRow products={productRecommendations} />
</section>

<hr />

<section>
  <h2 class="title is-4">Customer Reviews</h2>
  <!-- <ProductCardRow products={productRecommendations} /> -->
  {#each product.comments as comment}
    <Comment {...comment} />
  {/each}
</section>
