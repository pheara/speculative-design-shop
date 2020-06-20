<script>
  let clazz = ''
  export { clazz as class }
  //   import { Icon } from 'svelma'
  import Icon from 'svelma/src/components/Icon.svelte'
  import Button from 'svelma/src/components/Button.svelte'
</script>

<div class={clazz}>
  <p>€49.90</p>
  <!-- <p> Delivery until 20-25 August 2020
</p> -->
  <p>Currently not deliverable.</p>
  <Button type="is-primary">
    <Icon pack="fas" icon="cart-plus" />
    <span>Add to Cart</span>
  </Button>
</div>
