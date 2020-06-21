<script>
  let clazz = ''
  export { clazz as class }

  export let productImages = []
  let selected = undefined
  function select(img) {
    selected = img
  }
  $: {
    if (!productImages || productImages.length === 0) {
      select(undefined)
    } else if (!selected || productImages.indexOf(selected) < 0) {
      // no pic selected yet or selected not among product images anymore
      select(productImages[0])
    }
  }
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
  .thumb.is-selected {
    border-color: #00d1b2; /*primary*/
    border-width: 2px;
  }
</style>

<div class="gallery {clazz}">
  {#if selected}
    <img class="largeImg" src={selected.src} alt={selected.alt} />
  {/if}
  <div class="thumbs">

    {#each productImages as img}
      <figure
        class="thumb image {img === selected ? 'is-selected' : ''}"
        on:click={() => select(img)}>
        <img src={img.src} alt={img.alt} />
      </figure>
    {/each}
  </div>
</div>
