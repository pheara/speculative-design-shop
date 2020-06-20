<script>
  let clazz = ''
  export { clazz as class }
</script>

<style>
  .stars {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  /* .nr-of-ratings { } */
</style>

<div class="stars {clazz}">
  <img src="../star-full.svg" alt="full star" />
  <img src="../star-full.svg" class="ml-1" alt="full star" />
  <img src="../star-full.svg" class="ml-1" alt="full star" />
  <img src="../star-full.svg" class="ml-1" alt="full star" />
  <img src="../star-empty.svg" class="ml-1" alt="empty star" />
  <a href="./" class="nr-of-ratings ml-2">(51)</a>
</div>
