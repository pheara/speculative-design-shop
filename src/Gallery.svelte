<script>
  let clazz = ''
  export { clazz as class }

  const productPictures = [
    {
      alt: 'TODO the product (1)',
      src: 'https://via.placeholder.com/500x500.png?text=image+of+product+1',
    },
    {
      alt: 'TODO the product (2)',
      src: 'https://via.placeholder.com/500x500.png?text=image+of+product+2',
    },
    {
      alt: 'TODO the product (3)',
      src: 'https://via.placeholder.com/500x500.png?text=image+of+product+3',
    },
    {
      alt: 'TODO the product (4)',
      src: 'https://via.placeholder.com/500x500.png?text=image+of+product+4',
    },
    {
      alt: 'TODO the product (5)',
      src: 'https://via.placeholder.com/500x500.png?text=image+of+product+5',
    },
  ]
</script>

<style>
  .gallery {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
  }

  .thumbs {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;

    flex-grow: 1;
    flex-basis: 64px;
  }

  .thumb {
    flex-grow: 1;
    flex-basis: 64px;
    min-width: 64px;

    border-color: grey;
    border-style: solid;
    border-left-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
  }

  .thumb:first {
    border-top-width: 1px;
  }

  .largeImg {
    flex-grow: 4;
  }
</style>

<div class="gallery {clazz}">
  <div class="thumbs mr-1">
    {#each productPictures as img}
      <figure class="thumb image is-64x64">
        <img src={img.src} alt={img.alt} />
      </figure>
    {/each}
  </div>
  <img
    class="largeImg"
    src={productPictures[0].src}
    alt={productPictures[0].alt} />
</div>

<!-- <div class="tile is-ancestor box {clazz}">
  <div class="tile is-vertical is-parent">
    {#each productPictures as img}
      <figure class="tile image is-64x64">
        <img src={img.src} alt={img.alt} style="" />
      </figure>
    {/each}
  </div>
  <figure class="tile image is-square">
  </figure>
</div> -->
