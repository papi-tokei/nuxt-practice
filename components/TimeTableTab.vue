<template>
  <div class="w-full flex">
    <button
      class="w-1/2 py-2 font-semibold focus:outline-none cursor-pointer border-gray-300"
      :class="
        dateTab
          ? 'border-b-2'
          : 'text-blue-700 border-t-2 border-l-2 border-r-2'
      "
      @click="$emit('toggleTab', false)"
    >
      1日目 09/16 (月・祝)
    </button>
    <button
      class="w-1/2 py-2 font-semibold focus:outline-none cursor-pointer border-gray-300"
      :class="
        dateTab
          ? 'text-blue-700 border-t-2 border-l-2 border-r-2'
          : 'border-b-2'
      "
      @click="$emit('toggleTab', true)"
    >
      2日目 09/17 (火)
    </button>
  </div>
</template>

<script>
export default {
  props: {
    dateTab: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
