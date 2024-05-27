<script setup lang="ts">
import { HeaderComponent } from '@/components';
</script>

<template>
  <main>
    <HeaderComponent />
    <div class="content">
      <RouterView />
    </div>
  </main>
</template>

<style>
.content {
  display: flex;
  justify-content: center;
}
</style>
