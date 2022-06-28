<script setup>
import { ref } from "vue";
</script>
<template lang="">
  <div class="flex justify-center flex-col items-center">
    <font-awesome-icon
      :icon="['fas', 'fa-heart']"
      class="heart my-[80px] text-yellow-400 text-6xl"
    />
    <p class="text-normal text-center">
      We make vitamins that are affordable, fun to take, easy <br />
      to remember to take — and most importantly, that work — <br />
      so you can get on with doing the more exciting things in life.
    </p>
  </div>
</template>
<style>
.heart {
  animation: bounce 2s linear infinite;
}

@keyframes bounce {
  25% {
    transform: rotateY(30deg);
  }
  50%,
  100% {
    transform: rotateX(0);
  }
  75% {
    transform: rotateY(-180deg);
  }
}
</style>
