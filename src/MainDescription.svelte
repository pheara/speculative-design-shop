<script>
  let clazz = ''
  export { clazz as class }

  import StarRating from './StarRating.svelte'
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

  /* .nr-of-ratings { } */
</style>

<div class="column is-half content has-text-left {clazz}">
  <h1>Connection Wristband</h1>

  <div class="rating">
    <div class="starcontainer">
      <StarRating stars={4.1} nrOfRatings={51} />
    </div>
    <a href="./" class="comments">51 comments</a>
  </div>

  <p>
    Aliquam sed tincidunt rutrum, aliquam vel sem. Proin vehicula tempor enim.
    Ut dignissim at justo at vulputate. Nunc quis hendrerit elit, id ultrices
    libero. Morbi lobortis in justo ut dapibus. Sed ultricies, erat in mollis
    semper, enim nisl interdum erat, ut euismod massa ante in magna.
  </p>

  <ul>
    <li>
      Integer varius lectus vel sagittis auctor. Curabitur id tempor arcu.
    </li>
    <li>Phasellus sed consequat dolor, eget pulvinar nisl.</li>
    <li>
      Suspendisse vel dui tempor diam blandit scelerisque a ut sem. Praesent at
      sollicitudin felis. Aenean tellus nibh, faucibus ac lectus quis, tincidunt
      consectetur sem.
    </li>
    <li>
      Phasellus mi nunc, aliquam sed tincidunt rutrum, aliquam vel sem. Proin
      vehicula tempor enim. Ut dignissim at justo at vulputate. Nunc quis
      hendrerit elit, id ultrices libero. Morbi lobortis in justo ut dapibus.
      Sed ultricies, erat in mollis semper, enim nisl interdum erat, ut euismod
      massa ante in magna.
    </li>
  </ul>
  <p />

</div>
