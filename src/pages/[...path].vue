<template>
  <div class="body-1 my-4 text-center">
    <p>
      The page you are looking for is not found
      <br />
      Please direct to <a href="/">home page</a>.
    </p>
  </div>
</template>

<script setup>
definePage({
  name: 'NotFound',
  meta: {
    title: 'Not Found',
    layout: '404',
  },
})
</script>
