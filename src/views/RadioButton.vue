<script setup lang="ts">
defineProps(["title"]);
</script>
<template>
  <div
    class="flex flex-row gap-2 rounded-full bg-[#d7da2f] py-2 px-8 w-fit hover:bg-[#e1e442]"
  >
    <img
      class="img-fluid h-6"
      alt="calculate"
      src="../assets/images/icon-calculator.svg"
    />
    <button class="font-bold text-slate-800" :title="title">{{ title }}</button>
  </div>
</template>

<style scoped></style>
