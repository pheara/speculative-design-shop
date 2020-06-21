<script>
  let clazz = ''
  export { clazz as class }

  import Icon from 'svelma/src/components/Icon.svelte'
  import Button from 'svelma/src/components/Button.svelte'
  import { formatDate } from './utils.js'

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
  //   const deliveryDateStr = formatDate(deliveryDate)

  let quantitySelected = '1'

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
    <div class="delivery mt-5">
      <label class="is-size-7 mb-1" for="quantity-select">Quantity:</label>
      <select
        name="quantity"
        id="quantity-select"
        bind:value={quantitySelected}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </div>
    <Button type="is-primary mt-5">
      <Icon pack="fas" icon="cart-plus" />
      <span>Add to Cart</span>
    </Button>
  </div>
</div>
