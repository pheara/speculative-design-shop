<script>
  import StarRating from './StarRating.svelte'
  const product = {
    image: {
      alt: 'TODO the product (5)',
      src: 'https://via.placeholder.com/500x500.png?text=image+of+product+5',
    },
  }
</script>

<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={product.image.src} alt={product.image.alt} />
    </figure>
  </div>
  <div class="card-content">
    <p class="title is-4">Curabitur a Tortor Nec Lorem Bibendum</p>
    <StarRating stars={3.2} nrOfRatings={12} />
    <!-- <div class="media">
      <div class="media-left" />
      <div class="media-content">
        <p class="title is-4">Curabitur a Tortor Nec Lorem Bibendum</p>
        <StarRating />
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris.
      <a>@bulmaio</a>
      .
      <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div> -->
  </div>
</div>
