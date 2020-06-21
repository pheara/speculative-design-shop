<script>
  import ProductCard from './ProductCard.svelte'

  export let products = {}
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
      <ProductCard
        id={p.id}
        title={p.title}
        stars={p.stars}
        nrOfRatings={p.nrOfRatings}
        imgalt={p.images.length > 0 ? p.images[0].alt : ''}
        imgsrc={p.images.length > 0 ? p.images[0].src : ''} />
    </div>
  {/each}
  <!-- <ProductCard />
  <ProductCard />
  <ProductCard /> -->
</div>
