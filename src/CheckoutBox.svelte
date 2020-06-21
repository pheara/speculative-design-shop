<script>
  let clazz = ''
  export { clazz as class }
  //   import { Icon } from 'svelma'
  import Icon from 'svelma/src/components/Icon.svelte'
  import Button from 'svelma/src/components/Button.svelte'

  export let price = 0
  $: priceStr = new String(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    }).format(price),
  )
</script>

<div class={clazz}>
  <p>{priceStr}</p>
  <!-- <p> Delivery until 20-25 August 2020
</p> -->
  <p>Currently not deliverable.</p>
  <Button type="is-primary">
    <Icon pack="fas" icon="cart-plus" />
    <span>Add to Cart</span>
  </Button>
</div>
