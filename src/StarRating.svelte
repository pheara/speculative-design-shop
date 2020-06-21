<script>
  let clazz = ''
  export { clazz as class }

  export let nrOfRatings = 0
  export let stars = 0.0

  //   function starsToBooleanArray(stars) {
  //     const arr = Array(5).fill(false)
  //     for (let i = 0; i < stars; i++) {
  //       arr[i] = true
  //     }
  //     return arr
  //   }
  $: starsBounded = Math.max(0.0, Math.min(5.0, stars))
  $: starsStr = starsBounded.toFixed(1)
  $: nrOfRatingsStr = nrOfRatings.toFixed(0)
  //   $: starsInt = Math.round(starsBounded)
  //   $: starsArr = starsToBooleanArray(starsInt)
</script>

<style>
  .fullrow {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
  }

  .star {
    max-height: 1em;
  }

  /* .nr-of-ratings { } */
</style>

<div class="fullrow {clazz}">

  <div class="mr-2">
    <img
      src="../star-{stars > 0.5 ? 'full' : 'empty'}.svg"
      alt="full star"
      class="star mr-1" />
    <img
      src="../star-{stars > 1.5 ? 'full' : 'empty'}.svg"
      class="star mr-1"
      alt="full star" />
    <img
      src="../star-{stars > 2.5 ? 'full' : 'empty'}.svg"
      class="star mr-1"
      alt="full star" />
    <img
      src="../star-{stars > 3.5 ? 'full' : 'empty'}.svg"
      class="star mr-1"
      alt="full star" />
    <img
      src="../star-{stars > 4.5 ? 'full' : 'empty'}.svg"
      class="star"
      alt="full star" />
  </div>

  <div>
    <span class="mr-2">{starsStr}</span>
    {#if nrOfRatings}
      <a href="./">({nrOfRatingsStr})</a>
    {/if}
  </div>
</div>
