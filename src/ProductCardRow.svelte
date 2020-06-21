<script>
  import ProductCard from './ProductCard.svelte'

  const products = new Array(4).fill(true)
</script>

<style>
  .root {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  }
</style>

<div class="root">
  {#each products as p}
    <div class="cardwrapper ml-3">
      <ProductCard />
    </div>
  {/each}
  <!-- <ProductCard />
  <ProductCard />
  <ProductCard /> -->
</div>
