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

  let deliveryDate = new Date(Date.now())
  deliveryDate.setDate(deliveryDate.getDate() + 17)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const deliveryDateStr = deliveryDate.toLocaleDateString('en-US', options)

  //   const
</script>

<div class={clazz}>
  <div class="box has-text-left">
    <p class="is-size-4">{priceStr}</p>
    <p>+€5.00 shipping</p>
    <div class="delivery mt-4">
      <h2 class="is-size-7">Delivery:</h2>
      <!-- <p>Currently not deliverable.</p> -->
      <p>until {deliveryDateStr}</p>
    </div>
    <!-- <div class="delivery mt-5">
      <h2 class="is-size-7">Quantity:</h2>
      DROPDOWN HERE
    </div> -->
    <Button type="is-primary mt-5">
      <Icon pack="fas" icon="cart-plus" />
      <span>Add to Cart</span>
    </Button>
  </div>
</div>
