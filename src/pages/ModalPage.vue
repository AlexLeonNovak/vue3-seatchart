<script setup lang="ts">
import { ModalDialog } from '@/components';
import { ref } from 'vue';
import type { Options, SubmitEvent } from 'seatchart';
import SeatChart from '../library/components/SeatChart.vue';

const seatChartRef = ref<typeof SeatChart>();
const checkoutDetailsRef = ref<SubmitEvent | null>(null);
const dialogVisible = ref<boolean>(false);
const showDialog = () => (dialogVisible.value = true);
const hideDialog = () => (dialogVisible.value = false);

const options: Options = {
  cart: { visible: false },
  legendVisible: false,
  map: {
    rows: 10,
    columns: 10,
    seatTypes: {
      default: {
        label: 'Economy',
        cssClass: 'economy',
        price: 15,
      },
      first: {
        label: 'First Class',
        cssClass: 'first-class',
        price: 25,
        seatRows: [0, 1, 2],
      },
      reduced: {
        label: 'Reduced',
        cssClass: 'reduced',
        price: 10,
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
    selectedSeats: [
      { row: 0, col: 5 },
      { row: 0, col: 6 },
    ],
    rowSpacers: [3, 7],
    columnSpacers: [5],
  },
};

const onCheckout = () => {
  checkoutDetailsRef.value = seatChartRef.value?.checkoutCart();
  hideDialog();
};
const onSubmit = (e: SubmitEvent | any) => {
  console.log('SubmitEvent', JSON.stringify(e, null, 4));
};
</script>

<template>
  <div class="preview">
    <div class="btn-block">
      <button class="btn" @click="showDialog">Show dialog</button>
    </div>
    <pre
      v-if="checkoutDetailsRef"
    ><code>{{ JSON.stringify(checkoutDetailsRef, null, 2) }}</code></pre>
  </div>
  <ModalDialog :show="dialogVisible" @update:show="hideDialog">
    <SeatChart :options="options" @cart:submit="onSubmit" ref="seatChartRef" />
    <div class="dialog__footer">
      <button class="btn" @click="onCheckout">Checkout</button>
    </div>
  </ModalDialog>
</template>

<style scoped>
.dialog__footer {
  display: flex;
  justify-content: center;
}
.btn-block {
  text-align: center;
}

.preview {
  display: block;
}
</style>
