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
    {
      alt: 'TODO the product (6)',
      src: 'https://via.placeholder.com/500x500.png?text=image+of+product+6',
    },
  ]
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
  <img
    class="largeImg"
    src={productPictures[0].src}
    alt={productPictures[0].alt} />
  <div class="thumbs">
    {#each productPictures as img}
      <figure class="thumb image">
        <img src={img.src} alt={img.alt} />
      </figure>
    {/each}
  </div>
</div>
