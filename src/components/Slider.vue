<script setup>
import { ref } from "vue";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const data = ref([
  {
    title: "SLEEP",
    content: "S H O P N O W",
    content2: "S H O P T A R G E T",
    imgSrc: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/02/18172920/Home_Small-Thanks-1.jpg",
      import.meta.url
    ).href,
  },
  {
    title: "SLEEP",
    content: "S H O P N O W",
    content2: "S H O P T A R G E T",
    imgSrc: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/01/18173006/Home_Boston-1.jpg",
      import.meta.url
    ).href,
  },
  {
    title: "SLEEP",
    content: "S H O P N O W",
    content2: "S H O P T A R G E T",
    imgSrc: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/01/18173048/Home_WUM-1.jpg",
      import.meta.url
    ).href,
  },
  {
    title: "SLEEP",
    content: "S H O P N O W",
    content2: "S H O P T A R G E T",
    imgSrc: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/02/18172920/Home_Small-Thanks-1.jpg",
      import.meta.url
    ).href,
  },
  {
    title: "SLEEP",
    content: "S H O P N O W",
    content2: "S H O P T A R G E T",
    imgSrc: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/01/18173006/Home_Boston-1.jpg",
      import.meta.url
    ).href,
  },
  {
    title: "SLEEP",
    content: "S H O P N O W",
    content2: "S H O P T A R G E T",
    imgSrc: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/01/18173048/Home_WUM-1.jpg",
      import.meta.url
    ).href,
  },
]);
</script>
<template lang="">
  <!-- slide-title -->
  <div class="mt-[100px] flex flex-col px-8">
    <h1 class="text-bigger tracking-[0.7rem]">GANG'S ALL HERE</h1>
    <div class="flex justify-between">
      <p class="text-normal">13 Essential Daily Supplements</p>
      <button
        class="border-2 border-black py-3 px-4 text-[1.1vw] rounded-[30px] text-black self-end mr-[50px] pl-[40px] flex justify-center items-center mb-[30px]"
      >
        S H O P N O W
        <font-awesome-icon
          :icon="['fas', 'fa-arrow-right-long']"
          class="mx-[20px]"
        />
      </button>
    </div>
  </div>
  <!-- slider -->
  <Splide
    :options="{
      rewind: false,
      perPage: 3,
      focus: 'center',
      perMove: 1,
      trimSpace: false,
      gap: 20,
      padding: { left: '2.5rem', right: '2.5rem' },
    }"
    aria-label="Vue Splide Example"
  >
    <SplideSlide v-for="(item, index) in data" :key="index">
      <div class="cursor-grab">
        <img :src="item.imgSrc" alt="Sample 1" />
        <h1 class="mt-4 mb-5 text-middle">{{ item.title }}</h1>
        <div class="flex">
          <button
            class="border-2 border-black py-3 text-[1.1vw] rounded-[30px] text-black self-end flex justify-center items-center mb-[30px] xl:px-3 w-[50%] xl:mx-2"
          >
            {{ item.content }}
            <font-awesome-icon
              :icon="['fas', 'fa-arrow-right-long']"
              class="md:mx-3"
            />
          </button>
          <button
            v-if="index === 3 || index === 5"
            class="w- border-2 border-black py-3 text-[1.1vw] rounded-[30px] text-black self-end flex justify-center items-center mb-[30px] xl:px-3 w-[50%] xl:mx-2"
          >
            {{ item.content2 }}
            <font-awesome-icon
              :icon="['fas', 'fa-arrow-right-long']"
              class="md:mx-3"
            />
          </button>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>
<style>
.splide__arrow {
  border: 2px solid black;
}
</style>
