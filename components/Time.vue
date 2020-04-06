<template>
  <div class="flex flex-col relative lg:border-t-2">
    <div
      class="h-12 bg-gray-300 lg:bg-white font-bold flex justify-center items-center
      time2"
    >
      {{ time }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      default: '時間を入力して下さい'
    }
  }
}
</script>

<style>
.time2 {
  @media (min-width: 1024px) {
    position: absolute;
    top: -1.5rem;
    left: -3.5rem;
  }
}
</style>
