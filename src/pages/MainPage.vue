<script setup lang="ts">
import SeatChart from '@/library/components/SeatChart.vue';
import type { CartChangeEvent, CartClearEvent, Options, SeatChangeEvent, SeatIndex, SubmitEvent } from 'seatchart'
import 'seatchart/dist/seatchart.min.css';

const seatLabel = ({row, col}: SeatIndex): string => {
  let startValue;
  if (row >= 6 && row <= 15) {
    if ([18, 19].includes(col)) {
      startValue = (row + 123) * 2;
    }
    if ([0, 1].includes(col)) {
      startValue = (row + 124) * 2;
    }
  }
  if (![0, 1, 18, 19].includes(col)) {
    if (row >= 0 && row <= 14) {
      startValue = (row + 1) * 16;
    }
    if (row >= 16 && row <= 18) {
      startValue = ((row + 2) * 16) + 8;
    }
  }
  if (startValue) {
    const offset = col - 2;
    return String(startValue - offset);
  }

  return `${row}:${col}`;
}

const options: Options = {
  cart: {
    currency: '₴',
    submitLabel: 'Checkout',
  },
  map: {
    rows: 19,
    columns: 20,
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
        seatRows: [0, 1],
      },
      reduced: {
        label: 'Reduced',
        cssClass: 'reduced',
        price: 99,
        seatRows: [16, 17, 18],
      },
    },
    disabledSeats: [
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 1, col: 0 },
      { row: 1, col: 1 },
      { row: 2, col: 0 },
      { row: 2, col: 1 },
      { row: 3, col: 0 },
      { row: 3, col: 1 },
      { row: 4, col: 0 },
      { row: 4, col: 1 },
      { row: 5, col: 0 },
      { row: 5, col: 1 },
      { row: 0, col: 18 },
      { row: 0, col: 19 },
      { row: 1, col: 18 },
      { row: 1, col: 19 },
      { row: 2, col: 18 },
      { row: 2, col: 19 },
      { row: 3, col: 18 },
      { row: 3, col: 19 },
      { row: 4, col: 18 },
      { row: 4, col: 19 },
      { row: 5, col: 18 },
      { row: 5, col: 19 },

      { row: 15, col: 2 },
      { row: 15, col: 3 },
      { row: 15, col: 4 },
      { row: 15, col: 5 },
      { row: 15, col: 6 },
      { row: 15, col: 7 },
      { row: 15, col: 8 },
      { row: 15, col: 9 },
      { row: 15, col: 10 },
      { row: 15, col: 11 },
      { row: 15, col: 12 },
      { row: 15, col: 13 },
      { row: 15, col: 14 },
      { row: 15, col: 15 },
      { row: 15, col: 16 },
      { row: 15, col: 17 },

      { row: 16, col: 0 },
      { row: 16, col: 1 },
      { row: 17, col: 0 },
      { row: 17, col: 1 },
      { row: 18, col: 0 },
      { row: 18, col: 1 },
      { row: 16, col: 18 },
      { row: 16, col: 19 },
      { row: 17, col: 18 },
      { row: 17, col: 19 },
      { row: 18, col: 18 },
      { row: 18, col: 19 },
    ],
    reservedSeats: [
      { row: 0, col: 3 },
      { row: 0, col: 4 },
    ],
    indexerRows: { visible: false },
    indexerColumns: { visible: false },
    seatLabel,
    selectedSeats: [{ row: 0, col: 5 }, { row: 0, col: 6 }],
    rowSpacers: [16],
    columnSpacers: [2, 10, 18],
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
