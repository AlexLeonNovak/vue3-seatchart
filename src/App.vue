<script setup lang="ts">
import SeatChart from '@/library/components/SeatChart.vue';
import type { CartChangeEvent, CartClearEvent, Options, SeatChangeEvent, SubmitEvent } from 'seatchart'
import 'seatchart/dist/seatchart.min.css';

const options: Options = {
  cart: {
    currency: '₴',
    submitLabel: 'Checkout',
  },
  map: {
    rows: 10,
    columns: 10,
    seatTypes: {
      default: {
        label: 'Economy',
        cssClass: 'economy',
        price: 150,
      },
      first: {
        label: 'First class',
        cssClass: 'first-class',
        price: 250,
        seatRows: [0, 1, 2],
      },
      reduced: {
        label: 'Reduced',
        cssClass: 'reduced',
        price: 99,
        seatRows: [7, 8, 9],
      },
    },
    disabledSeats: [
      { row: 0, col: 0 },
      { row: 0, col: 9 },
    ],
    reservedSeats: [
      { row: 0, col: 3 },
      { row: 0, col: 4 },
    ],
    selectedSeats: [{ row: 0, col: 5 }, { row: 0, col: 6 }],
    rowSpacers: [3, 7],
    columnSpacers: [5],
  }
}

const onSubmit = (e: SubmitEvent) => {
  console.log('SubmitEvent', e)
  alert(JSON.stringify(e, null, 4));
}
const onCartChange = (e: CartChangeEvent) => console.log('CartChangeEvent', e);
const onCartClear = (e: CartClearEvent) => console.log('CartClearEvent', e);
const onSeatChange = (e: SeatChangeEvent) => console.log('SeatChangeEvent', e);

</script>

<template>

  <main>
    <SeatChart :options="options"
               @cart:submit="onSubmit"
               @update:cartChange="onCartChange"
               @update:cartClear="onCartClear"
               @update:seatChange="onSeatChange"
    />
    <h2>View the console to see events</h2>
  </main>
</template>

<style>
body {
  display: flex;
  justify-content: center;
}

.economy {
  color: white;
  background-color: #43aa8b;
}

.first-class {
  color: white;
  background-color: #277da1;
}

.reduced {
  color: white;
  background-color: #f8961e;
}
</style>
