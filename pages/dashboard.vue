<template>
  <h1>Welcome to your dashboard</h1>
</template>
<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>