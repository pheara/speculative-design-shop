<script>
  import ProductCard from './ProductCard.svelte'

  let className = ''
  export { className as class }

  export let products = {}
  const emptyImg = { src: '', alt: '' }
</script>

<style>
  .root {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  }
</style>

<div class="root pb-4 {className}">
  {#each products as p}
    <div class="cardwrapper ml-3">
      <ProductCard
        id={p.id}
        title={p.title}
        stars={p.stars}
        nrOfRatings={p.nrOfRatings}
        image={p.images.length > 0 ? p.images[0] : emptyImg} />
    </div>
  {/each}
</div>
