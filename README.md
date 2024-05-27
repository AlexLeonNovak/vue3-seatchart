# Vue 3 SeatChart

Based on [omahili/seatchart.js](https://github.com/omahili/seatchart.js)

- [Demo](https://alexleonnovak.github.io/vue3-seatchart/)
- [Repository](https://github.com/AlexLeonNovak/vue3-seatchart)
- [NPM](https://www.npmjs.com/package/vue3-seatchart)

## Install
### Npm
```bash
npm install vue3-seatchart
```
### Yarn
```bash
yarn add vue3-seatchart
```
## Usage
Import SeatChart and add options:
```vue
<script setup lang="ts">
import { SeatChart } from 'vue3-seatchart';
import { type Options } from 'seatchart';
import 'seatchart/dist/seatchart.min.css';

const options: Options = {
  map: {
    rows: 7,
    columns: 7,
    seatTypes: {
      default: {
        label: 'Economy',
        cssClass: 'economy',
        price: 10,
      },
    },
  },
};

const onSubmit = (e: SubmitEvent) => {
  console.log(e)
}

</script>

<template>
  //...
  <SeatChart :options="options" @cart:submit="onSubmit" />
  //...
</template>

<style>
  .economy {
    color: white;
    background-color: #43aa8b;
  }
</style>

```
Or add via plugin
```typescript
// ./src/main.ts

import { createApp } from 'vue'
import App from './App.vue'
import { useSeatChart } from 'vue3-seatchart';
import 'seatchart/dist/seatchart.min.css';

const app = createApp(App)
app.use(useSeatChart);
app.mount('#app')
```

## Events
| Name                  | Description                                                                                                           | Return value                                                                |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **cart:submit**       | When the submit button is pressed                                                                                     | [SubmitEvent](https://seatchart.js.org/interfaces/SubmitEvent.html)         | 
| **update:cartChange** | When the cart changes. More specifically when a seat is selected, unselected, removed from the cart or on cart clear. | [CartChangeEvent](https://seatchart.js.org/interfaces/CartChangeEvent.html) | 
| **update:seatChange** | When a seat changes. More specifically when a seat is selected, unselected, removed from the cart or on cart clear.   | [SeatChangeEvent](https://seatchart.js.org/interfaces/SeatChangeEvent.html) | 
| **update:cartClear**  | When the cart is cleared from all its items.                                                                          | [CartClearEvent](https://seatchart.js.org/interfaces/CartClearEvent.html)                                                          | 

## Exposed methods
| Method | Description | Return value |
| -- | -- | -- |
| **checkoutCart** | Call submit checkout cart | [SubmitEvent](https://seatchart.js.org/interfaces/SubmitEvent.html) |

### Example
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { SeatChart } from 'vue3-seatchart';
import type { Options, SubmitEvent } from 'seatchart';
import 'seatchart/dist/seatchart.min.css';

const seatChartRef = ref<typeof SeatChart>();

const options: Options = {
  // ...
  cart: {
    visible: false,
  },
  // ...
};

const onCheckout = () => {
  const checkoutData: SubmitEvent = seatChartRef.value?.checkoutCart();
  console.log(checkoutData);
}

</script>

<template>
  //...
  <SeatChart :options="options" ref="seatChartRef" />
  <button @click="onCheckout">Checkout</button>
  //...
</template>
```
