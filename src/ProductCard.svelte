<script>
  import { Router, Link, Route, router } from 'yrv'

  import StarRating from './StarRating.svelte'

  export let id = ''
  export let title = 'Untitled'
  export let image = {
    src: '',
    alt: '',
  }
  export let stars = 0.0
  export let nrOfRatings = 0.0
</script>

<style>
  .card {
    max-width: 160px;
    min-width: 160px;
  }
  .stars {
    font-size: 0.5rem;
  }
</style>

<div class="card">
  <Link
    href="/{id}"
    on:click={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
    <div class="card-image">
      <figure class="image is-1by1">
        <img src={image.src} alt={image.alt} />
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-6">{title}</p>
      <div class="stars">
        <StarRating {stars} {nrOfRatings} />
      </div>
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
  </Link>
</div>
