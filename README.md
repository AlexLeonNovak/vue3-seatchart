# Vue 3 SeatChart

Based on [omahili/seatchart.js](https://github.com/omahili/seatchart.js)

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

<style scoped>
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
| **cart:submit**       | When he submit button is pressed                                                                                      | [SubmitEvent](https://seatchart.js.org/interfaces/SubmitEvent.html)         | 
| **update:cartChange** | When the cart changes. More specifically when a seat is selected, unselected, removed from the cart or on cart clear. | [CartChangeEvent](https://seatchart.js.org/interfaces/CartChangeEvent.html) | 
| **update:seatChange** | When a seat changes. More specifically when a seat is selected, unselected, removed from the cart or on cart clear.   | [SeatChangeEvent](https://seatchart.js.org/interfaces/SeatChangeEvent.html) | 
| **update:cartClear**  | When the cart is cleared from all its items.                                                                          | [CartClearEvent](https://seatchart.js.org/interfaces/CartClearEvent.html)                                                          | 

