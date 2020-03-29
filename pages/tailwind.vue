<template>
  <div class="flex flex-col min-h-screen">
    <header class="w-screen h-16 bg-red-400">
      <div class="ml-4">Dummy Conferense 2020</div>
    </header>
    <main class="flex-1 h-full w-full bg-white px-4 py-2">
      <TableContent></TableContent>
      <TableContent></TableContent>
    </main>
    <footer class="w-screen h-12 bg-red-400">Dummy Conferense 2020</footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TableContent from '@/components/TableContent.vue'

export default Vue.extend({
  components: {
    TableContent
  }
})
</script>

<style></style>
