<script>
  import ProductCard from './ProductCard.svelte'

  const products = []
  for (let i = 0; i < 6; i++) {
    products.push({
      title: `Curabitur a Tortor Nec Lorem Bibendum (${i + 1})`,
      imgsrc: `https://via.placeholder.com/500x500.png?text=image+of+product+${
        i + 1
      }`,
      imgalt: `TODO the product (${i + 1})`,
      stars: Math.random() * 5,
      nrOfRatings: Math.random() * 50,
    })
  }
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
      <ProductCard {...p} />
    </div>
  {/each}
  <!-- <ProductCard />
  <ProductCard />
  <ProductCard /> -->
</div>
