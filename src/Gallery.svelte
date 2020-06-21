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
  /* .gallery {
    display: grid;
    grid-template-columns: [col1-start] 1fr 1fr 1fr 1fr [lastcol-end];
    grid-template-rows: 4fr 64px;

    grid-column-gap: 0.25rem;
    grid-row-gap: 0.25rem;

    justify-items: center;
    align-items: center;
  }
  .largeImg {
    grid-column-start: col1-start;
    grid-column-end: lastcol-end;
    grid-row-start: 1;
    grid-row-end: 1;
  } */

  .gallery {
    display: flex;
    flex-direction: column;
  }
  .thumbs {
    flex-grow: 1;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
  }

  .thumb {
    border: 1px solid grey;

    margin-top: 0.25rem;
    margin-right: 0.25rem;
  }
</style>

<div class="gallery {clazz}">
  <img
    class="largeImg"
    src={productPictures[0].src}
    alt={productPictures[0].alt} />
  <div class="thumbs">
    {#each productPictures as img}
      <figure class="thumb image is-64x64">
        <img src={img.src} alt={img.alt} />
      </figure>
    {/each}
  </div>
</div>

<!-- 
<div class="gallery {clazz}">
  <img
    class="largeImg"
    src={productPictures[0].src}
    alt={productPictures[0].alt} />
  {#each productPictures as img}
    <figure class="thumb image is-64x64">
      <img src={img.src} alt={img.alt} />
    </figure>
  {/each}
</div> 
-->
