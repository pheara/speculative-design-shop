<script>
  import StarRating from './StarRating.svelte'

  export let name = ''
  export let rating = 0
  export let date = new Date(0)
  export let country = ''
  export let title = ''
  export let comment = ''
  export let avatar = ''
</script>

<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src={avatar} alt="Avatar of {name}" class="is-rounded" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content has-text-left">
      <p class="">{name}</p>
      <p class="title is-6">{title}</p>
      <p>{comment}</p>
      <StarRating stars={rating} />
    </div>
  </div>
</article>
