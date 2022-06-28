<script setup>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { reactive } from "vue";

const data = reactive({
  list: [
    { content: "AVAILABLE AT WALMART" },
    { content: "AVAILABLE AT TARGET" },
  ],
});
</script>

<template lang="">
  <div class="h-screen w-full bg-hero-bg bg-no-repeat bg-cover">
    <div class="h-full w-full flex flex-col items-center justify-end">
      <span class="text-dynamic text-white">DOITDAILY</span>
      <button
        class="border-2 border-white py-3 px-4 text-[1.1vw] rounded-[30px] text-white self-end mr-[50px] pl-[40px] flex justify-center items-center mb-[30px]"
      >
        L E A R N M O R E
        <font-awesome-icon
          :icon="['fas', 'fa-arrow-right-long']"
          class="mx-[20px]"
        />
      </button>
    </div>
  </div>
  <!-- 跑馬燈 -->
  <div class="bg-[#9dacd8] w-full flex items-center py-[30px]">
    <Vue3Marquee :clone="true" :duration="7">
      <span
        v-for="(text, index) in data.list"
        :key="index"
        class="flex items-end text-black font-bold"
      >
        <h1>{{ text.content }}</h1>
        <font-awesome-icon :icon="['fas', 'fa-heart']" class="mx-[3rem]" />
      </span>
    </Vue3Marquee>
  </div>
</template>
<style></style>
