<template>
  <button @click="handleError">Clear errors</button>
  {{ err }}
</template>
<script setup>
const props = defineProps({
  error: Object
})
const err = useError();
const handleError = () => clearError({ redirect: '/' })
</script>