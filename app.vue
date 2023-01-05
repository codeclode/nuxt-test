<template>
  <NuxtLayout>
    Counter:{{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
    {{ color }}
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))//nuxt专属响应式对象，不要使用useRef和uesReactive
const { data: count } = await useAsyncData('count', () => $fetch('/api/count'))
const { data: mountain } = await useFetch('/api/everest', { pick: ['title', 'description'] })//类似graphQL指定需要的返回值
console.log(mountain);
console.log(count);

const color = useColor() // Same as useState('color')
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>