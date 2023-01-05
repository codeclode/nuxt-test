<template>
  <div>

    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: green; }"></Style>
    </Head>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts/1">Post 1</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts/2">Post 2</NuxtLink>
        </li>
      </ul>
    </nav>
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup>
const title = ref('Hello World')
</script>