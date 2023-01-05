<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <NuxtLink to="/">home</NuxtLink>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'rotate',
    onBeforeEnter: (el) => {
      console.log("before");
    }
  }
})

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ children: 'console.log(\'Hello world\')' }]
})
</script>
