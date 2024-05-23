<script setup lang="ts">
import Seatchart, {
  type CartChangeEvent,
  type CartClearEvent,
  type Options,
  type SeatChangeEvent,
  type SubmitEvent
} from 'seatchart'
import { onMounted, ref } from 'vue'

  const props = defineProps<{options: Options}>();
  const containerRef = ref<HTMLDivElement>();
  const seatchartRef = ref<Seatchart>();
  const emit = defineEmits<{
    (type: 'cart:submit', event: SubmitEvent): void,
    (type: 'update:cartChange', event: CartChangeEvent): void,
    (type: 'update:seatChange', event: SeatChangeEvent): void,
    (type: 'update:cartClear', event: CartClearEvent): void,
  }>();

  onMounted(() => {
    if (!containerRef.value) {
      console.error('No init');
      return;
    }
    if (!props.options) {
      console.error('No options provided');
    }

    seatchartRef.value = new Seatchart(containerRef.value, props.options);

    seatchartRef.value?.addEventListener('submit', (e) => emit('cart:submit', e));
    seatchartRef.value?.addEventListener('cartchange', (e) => emit('update:cartChange', e));
    seatchartRef.value?.addEventListener('seatchange', (e) => emit('update:seatChange', e));
    seatchartRef.value?.addEventListener('cartclear', (e) => emit('update:cartClear', e));

  });



</script>

<template>
  <div ref="containerRef" class="sc-wrapper" />
</template>

