<script>
  let clazz = ''
  export { clazz as class }

  import StarRating from './StarRating.svelte'

  //   export let id = '0ac55dd3'
  export let title = ''
  export let stars = 0.0
  export let nrOfRatings = 0
  export let nrOfComments = 0
  //   export let images = []
  export let description = ''
</script>

<style>
  .rating {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .starcontainer {
    flex-grow: 1;
  }

  .comments {
    flex-grow: 0;
  }
</style>

<div class="column is-half content has-text-left {clazz}">

  <h1>{title}</h1>

  <div class="rating">
    <div class="starcontainer">
      <StarRating {stars} {nrOfRatings} />
    </div>
    <a href="./" class="comments">
      {nrOfComments} comment{nrOfComments > 1 ? 's' : ''}
    </a>
  </div>

  {@html description}

</div>
