<script setup lang="ts">
import { routes } from '@/router';
</script>

<template>
  <div class="nav">
    <RouterLink v-for="route in routes" :key="route.name" :to="route.path">{{
      route.name
    }}</RouterLink>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  border-bottom: 1px solid var(--color-accent);
  margin-bottom: 1rem;
}
.nav a {
  font-size: 18pt;
}
</style>
