<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

interface Props {
  show?: boolean;
}

interface Emits {
  (type: 'update:show', value: boolean): void;
}

withDefaults(defineProps<Props>(), { show: false });
const emits = defineEmits<Emits>();

const handleClose = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    hideDialog();
  }
};

const hideDialog = () => {
  emits('update:show', false);
};

onMounted(() => {
  document.addEventListener('keyup', handleClose);
});

onUnmounted(() => {
  document.removeEventListener('keyup', handleClose);
});
</script>

<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <span class="btn close" @click="hideDialog">&times;</span>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 0.5rem;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
  position: relative;
}

.close {
  display: flex;
  width: 20pt;
  height: 20pt;
  font-size: 24pt;
  padding: 0 0 2pt;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}
</style>
