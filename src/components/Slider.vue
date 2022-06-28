<script setup>
import { ref } from "vue";

const data = ref([
  {
    title: "SLEEP",
    content: "S H O P N O W",
    imgSrc: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/02/18172920/Home_Small-Thanks-1.jpg",
      import.meta.url
    ).href,
  },
  {
    title: "SLEEP",
    content: "S H O P N O W",
    imgSrc: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/02/18172920/Home_Small-Thanks-1.jpg",
      import.meta.url
    ).href,
  },
  {
    title: "SLEEP",
    content: "S H O P N O W",
    imgSrc: new URL(
      "https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/02/18172920/Home_Small-Thanks-1.jpg",
      import.meta.url
    ).href,
  },
]);
</script>
<template lang="">
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
  <div class="carousel flex px-8 w-full" data-flickity='{ "autoPlay": false }'>
    <div
      class="carousel-cell mr-[19px] mb-[100px]"
      v-for="(item, index) in data"
      :key="index"
    >
      <img :src="item.imgSrc" alt="" class="w-full h-full" />
      <h1 class="text-bigger mt-[7px] mb-[20px]">{{ item.title }}</h1>
      <button
        class="border-2 border-black py-3 px-4 text-[1.1vw] rounded-[30px] text-black self-end flex justify-center items-center mb-[30px]"
      >
        {{ item.content }}
        <font-awesome-icon
          :icon="['fas', 'fa-arrow-right-long']"
          class="mx-[20px]"
        />
      </button>
    </div>
  </div>
</template>
<style lang=""></style>
