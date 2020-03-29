<template>
  <div class="flex flex-col min-h-screen">
    <header class="w-screen h-16 bg-red-400">
      <div class="ml-4">Dummy Conferense 2020</div>
    </header>
    <main class="flex-1 h-full w-full bg-white px-4 py-2">
      <div class="flex justify-between items-center mb-2">
        <div class>
          <h2 class="bg-blue-600 text-white text-lg px-2">EN</h2>
        </div>
        <div class="ml-auto">
          <div class="text-gray-600 md:hidden">A+B会議室</div>
          <div class="text-gray-600">30分</div>
        </div>
      </div>
      <h2 class="font-bold text-xl mb-2">
        I Love Japan
      </h2>
      <h3 class="text-gray-600">Yamada Taro</h3>
      <div class="flex justify-end items-center lg:my-2">
        <div class="mr-2 text-gray-600">レベル :</div>
        <div class="px-2 border border-orange-500 bg-white text-orange-500">
          Intermediate
        </div>
      </div>
      <div
        class="flex lg:flex-col lg:items-center m-2 pb-2 border-gray-400 border-b"
      >
        <div class="w-1/2 text-center lg:mb-2">Youtube</div>
        <div class="w-1/2 text-center">発表資料</div>
      </div>
      <div class="flex justify-center items-center text-blue-600">詳細</div>
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

<style>
</style>
