<script setup lang="ts">
defineProps(['imageSrc', 'title', 'description']);
</script>

<template>
  <div class="w-full px-4 bg-slate-900 rounded-bl-4xl text-center py-[10%]">
    <div class="flex justify-center items-center">
      <img :src="imageSrc" alt="Result" class="img-fluid justify-center py-4" />
    </div>
    <p class="w-full whitespace-nowrap text-white font-bold text-base md:text-xl">
      {{ title }}
    </p>
    <p class="text-base text-slate-300 text-semibold">{{ description }}</p>
  </div>
</template>

<style scoped></style>
