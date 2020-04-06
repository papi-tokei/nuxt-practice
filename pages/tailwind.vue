<template>
  <div class="relative flex flex-col min-h-screen">
    <header class="w-screen h-16 bg-red-400">
      <div v-if="isLarge" class="h-full">
        <div class="h-full flex flex-row items-center">
          <div class=" ml-4">Logo image</div>
          <dev class="ml-8 text-gray-400">|</dev>
          <button class="focus:outline-none ml-8" @click="toggleConcept">
            概要
          </button>
          <button class="focus:outline-none ml-8" @click="toggleEventList">
            イベント一覧
          </button>
          <button class="ml-8">おしらせ</button>
          <button class="ml-8">会場</button>
          <button class="ml-8">サポート</button>
          <div class="ml-8">スポンサー</div>
          <div class="ml-8">スタッフ</div>
          <div class="flex-grow"></div>
          <div class="ml-8">English</div>
        </div>
        <ul v-if="conceptModal" class="concept bg-purple-900 text-white p-2">
          <li><button>開催概要</button></li>
          <li><button>行動規範</button></li>
        </ul>
        <ul v-if="eventListModal" class="event bg-purple-900 text-white p-2">
          <li>カンファレンス</li>
          <li>タイムテーブル</li>
          <li>セッション一覧</li>
          <li>子供向けワークショップ</li>
          <li>開発スプリント</li>
          <li>チュートリアル</li>
        </ul>
      </div>
      <div v-else class="h-full flex flex-row items-center">
        <div class=" ml-4">Logo image</div>
        <div class="flex-grow"></div>
        <button>ハンバーガーメニュー</button>
      </div>
      <!-- <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
      <ul class="absolute bg-white w-screen top-0 right-0 z-50">
        <li>概要</li>
        <li>イベント一覧</li>
        <li>お知らせ</li>
        <li>スポンサー</li>
        <li>スタッフ</li>
      </ul> -->
    </header>
    <main class="flex-1 h-full w-full bg-white px-4 py-2">
      <div class="max-w-3xl mx-auto my-8">
        <h2 class="text-sm font-semibold">
          ※イベントについては開催当日まで内容が変更される可能性があります。都度最新の情報をご確認ください。
        </h2>
        <TimeTableTab
          class="my-8"
          :date-tab="dateTab"
          @toggleTab="toggleTab"
        ></TimeTableTab>
        <Time time="09:00">
          <h3 class="h-12 font-bold flex justify-center items-center">開場</h3>
        </Time>
        <Time time="09:45">
          <h3 class="h-12 font-bold flex justify-center items-center">
            オープニング
          </h3>
        </Time>
        <Time time="10:10">
          <TableContent class="w-1/4 md:w-full my-8"></TableContent>
        </Time>
        <Time time="11:25">
          <div class="flex">
            <TableContent class="w-1/4 md:w-full mb-8"></TableContent>
            <TableContent class="w-1/4 md:w-full mb-8"></TableContent>
          </div>
          <div class="flex">
            <TableContent class="w-1/4 md:w-full mb-8"></TableContent>
            <TableContent class="w-1/4 md:w-full mb-8"></TableContent>
          </div>
        </Time>
      </div>
      <button @click="toggleMobileMessage">Test</button>
      <transition name="message1">
        <p v-if="isMobileMessage">message1</p>
      </transition>
      <transition name="message2">
        <p v-if="isMobileMessage">message2</p>
      </transition>
      <transition name="message3">
        <p v-if="isMobileMessage">message3</p>
      </transition>
      <transition name="message4">
        <p v-if="isMobileMessage">message4</p>
      </transition>
    </main>
    <footer class="w-screen h-12 bg-red-400">Dummy Conferense 2020</footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TableContent from '@/components/TableContent.vue'
import Time from '@/components/Time.vue'
import TimeTableTab from '@/components/TimeTableTab.vue'

export default Vue.extend({
  components: {
    TableContent,
    Time,
    TimeTableTab
  },
  data() {
    return {
      dateTab: false,
      conceptModal: false,
      eventListModal: false,
      isLarge: true,
      isMobileMessage: false
    }
  },
  methods: {
    toggleTab(isTruthy: boolean) {
      this.dateTab = isTruthy
    },
    toggleConcept() {
      this.conceptModal = !this.conceptModal
    },
    toggleEventList() {
      this.eventListModal = !this.eventListModal
    },
    toggleMobileMessage() {
      this.isMobileMessage = !this.isMobileMessage
    }
  }
})
</script>

<style scoped>
.concept {
  position: absolute;
  top: 80px;
  left: 145px;
}

.event {
  position: absolute;
  top: 80px;
  left: 220px;
}

.message1-enter,
.message2-enter,
.message3-enter,
.message4-enter,
.message1-leave-to,
.message2-leave-to,
.message3-leave-to,
.message4-leave-to {
  opacity: 0;
}
.message1-enter-active {
  transition: opacity 3.5s;
}

.message2-enter-active {
  transition: opacity 3.5s;
  transition-delay: 0.5s;
}
.message3-enter-active {
  transition: opacity 3.5s;
  transition-delay: 1.5s;
}
.message4-enter-active {
  transition: opacity 3.5s;
  transition-delay: 2.5s;
}
.message4-leave-active {
  transition: opacity 3.5s;
}
.message3-leave-active {
  transition: opacity 3.5s;
  transition-delay: 0.5s;
}
.message2-leave-active {
  transition: opacity 3.5s;
  transition-delay: 1.5s;
}
.message1-leave-active {
  transition: opacity 3.5s;
  transition-delay: 2.5s;
}
</style>
