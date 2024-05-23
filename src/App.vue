<script setup lang="ts">
import SeatChart from '@/library/components/SeatChart.vue';
import type { Options, SubmitEvent } from 'seatchart'
import 'seatchart/dist/seatchart.min.css';

const options: Options = {
  cart: {
    currency: '₴',
    submitLabel: 'Придбати',
  },
  map: {
    rows: 10,
    columns: 10,
    seatTypes: {
      default: {
        label: 'Економ',
        cssClass: 'economy',
        price: 150,
      },
      first: {
        label: 'Перший клас',
        cssClass: 'first-class',
        price: 250,
        seatRows: [0, 1, 2],
      },
      reduced: {
        label: 'Знижений',
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
  console.log(e)
}

</script>

<template>

  <main>
    <SeatChart :options="options" @cart:submit="onSubmit" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
