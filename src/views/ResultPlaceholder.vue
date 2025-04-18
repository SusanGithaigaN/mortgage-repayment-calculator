<script setup lang="ts">
defineProps(["imageSrc", "title", "description"]);
</script>

<template>
  <div class="w-full px-4 bg-[#122f3f] rounded-bl-4xl rounded-tr-2xl rounded-br-2xl text-center py-[10%]">
    <div class="flex justify-center items-center">
      <img :src="imageSrc" alt="Result" class="img-fluid justify-center py-4" />
    </div>
    <p class="w-full whitespace-nowrap text-white font-bold text-base md:text-xl py-4">
      {{ title }}
    </p>
    <p class="text-base text-[#e3f3fd] text-semibold">{{ description }}</p>
  </div>
</template>

<style scoped></style>
