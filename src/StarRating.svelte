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
  //   $: starsInt = Math.round(starsBounded)
  //   $: starsArr = starsToBooleanArray(starsInt)
</script>

<style>
  .stars {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  .star {
    max-height: 1em;
  }

  /* .nr-of-ratings { } */
</style>

<div class="stars {clazz}">

  <img
    src="../star-{stars > 0.5 ? 'full' : 'empty'}.svg"
    alt="full star"
    class="star" />
  <img
    src="../star-{stars > 1.5 ? 'full' : 'empty'}.svg"
    class="ml-1 star"
    alt="full star" />
  <img
    src="../star-{stars > 2.5 ? 'full' : 'empty'}.svg"
    class="ml-1 star"
    alt="full star" />
  <img
    src="../star-{stars > 3.5 ? 'full' : 'empty'}.svg"
    class="ml-1 star"
    alt="full star" />
  <img
    src="../star-{stars > 4.5 ? 'full' : 'empty'}.svg"
    class="ml-1 star"
    alt="full star" />

  <!-- <img src="../star-full.svg" alt="full star" />
  <img src="../star-full.svg" class="ml-1" alt="full star" />
  <img src="../star-full.svg" class="ml-1" alt="full star" />
  <img src="../star-full.svg" class="ml-1" alt="full star" />
  <img src="../star-empty.svg" class="ml-1" alt="empty star" /> -->

  <span class="ml-2">{starsStr}</span>
  <a href="./" class="ml-2">({nrOfRatings})</a>
</div>
