<script setup lang="ts">
import Seatchart, {
  type CartChangeEvent,
  type CartClearEvent,
  type Options,
  type SeatChangeEvent,
  type SubmitEvent,
} from 'seatchart';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{ options: Options }>();
const containerRef = ref<HTMLDivElement>();
const seatchartRef = ref<Seatchart>();
const emit = defineEmits<{
  (type: 'cart:submit', event: SubmitEvent): void;
  (type: 'update:cartChange', event: CartChangeEvent): void;
  (type: 'update:seatChange', event: SeatChangeEvent): void;
  (type: 'update:cartClear', event: CartClearEvent): void;
}>();

const onSubmit = (e: SubmitEvent) => emit('cart:submit', e);
const onCartChange = (e: CartChangeEvent) => emit('update:cartChange', e);
const onSeatChange = (e: SeatChangeEvent) => emit('update:seatChange', e);
const onCartClear = (e: CartClearEvent) => emit('update:cartClear', e);

onMounted(() => {
  if (!containerRef.value) {
    console.error('No init');
    return;
  }
  if (!props.options) {
    console.error('No options provided');
  }

  seatchartRef.value = new Seatchart(containerRef.value, props.options);

  seatchartRef.value?.addEventListener('submit', onSubmit);
  seatchartRef.value?.addEventListener('cartchange', onCartChange);
  seatchartRef.value?.addEventListener('seatchange', onSeatChange);
  seatchartRef.value?.addEventListener('cartclear', onCartClear);
});

onUnmounted(() => {
  seatchartRef.value?.removeEventListener('submit', onSubmit);
  seatchartRef.value?.removeEventListener('cartchange', onCartChange);
  seatchartRef.value?.removeEventListener('seatchange', onSeatChange);
  seatchartRef.value?.removeEventListener('cartclear', onCartClear);
});

const checkoutCart = (): SubmitEvent => {
  const total = seatchartRef.value?.getCartTotal() || 0;
  const cart = seatchartRef.value?.getCart() || [];
  const event: SubmitEvent = { cart, total };
  onSubmit(event);
  return event;
};

defineExpose({ checkoutCart });
</script>

<template>
  <div ref="containerRef" class="sc-wrapper" />
</template>
