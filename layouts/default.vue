<template>
  <div>
    <header>123</header>
    <slot />
    <footer>
      <div v-if="$route.params.id">
        <NuxtLink :to="prev">⬅️</NuxtLink> |
        <NuxtLink :to="next">➡️</NuxtLink>
      </div>
    </footer>
  </div>
</template>

<script setup>
const route = useRoute()
const id = computed(() => Number(route.params.id || 1))
const prev = computed(() => '/posts/' + (id.value - 1))
const next = computed(() => '/posts/' + (id.value + 1))
</script>