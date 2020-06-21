<script>
  import StarRating from './StarRating.svelte'

  export let name = ''
  export let rating = 0
  export let date = new Date(0)
  export let country = ''
  export let title = ''
  export let comment = ''
  export let avatar = ''

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const dateStr = date.toLocaleDateString('en-US', options)
</script>

<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src={avatar} alt="Avatar of {name}" class="is-rounded" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content has-text-left">

      <div class="is-size-7 mb-2">{name} in {country} on {dateStr}</div>
      <div class="title is-6 mb-2">{title}</div>
      <!-- <hgroup class="mb-1">
      </hgroup> -->
      <p>{comment}</p>
      <StarRating stars={rating} />
    </div>
  </div>
</article>
