<script>
  let clazz = ''
  export { clazz as class }

  export let productImages = []
</script>

<style>
  .gallery {
    display: flex;
    flex-direction: column;
  }
  .thumbs {
    margin-top: 0.25rem;

    display: grid;
    grid-template-columns: [col1-start] 1fr 1fr 1fr 1fr [lastcol-end];
    grid-template-rows: 1fr;
    grid-column-gap: 0.25rem;
    grid-row-gap: 0.25rem;
  }

  .thumb {
    border: 1px solid grey;
  }
</style>

<div class="gallery {clazz}">
  <img class="largeImg" src={productImages[0].src} alt={productImages[0].alt} />
  <div class="thumbs">

    {#each productImages as img}
      <figure class="thumb image">
        <img src={img.src} alt={img.alt} />
      </figure>
    {/each}
  </div>
</div>
