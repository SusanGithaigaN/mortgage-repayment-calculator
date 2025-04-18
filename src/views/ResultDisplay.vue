<script setup lang="ts">
defineProps<{
  monthlyPay?: string;
  exResults?: string;
  // imageSrc: string;
  title: string;
  description: string;
  tots: string;
  mrp: string;
}>();
</script>

<template>
  <div class="w-full px-6 bg-[#122f3f] rounded-bl-4xl text-start py-6">
    <div class="flex justify-center items-center"></div>
    <p class="w-full whitespace-nowrap text-white font-bold text-base md:text-xl py-4">
      {{ monthlyPay }}
    </p>
    <p class="py-4 text-sn text-[#e3f3fd]">{{ exResults }}</p>
    <div class="flex flex-col bg-slate-900 rounded-xl border-t-4 border-t-[#d7da2f] py-4 px-4">
      <p class="text-[#e3f3fd] pb-2">{{ mrp }}</p>
      <p
        class="w-full whitespace-nowrap text-[#d7da2f] font-bold text-base md:text-4xl py-4"
      >
        {{ title }}
      </p>
      <hr class="text-[#525759] " />
      <div class="py-4">
      <p class="text-[#e3f3fd] pb-2">{{ tots }}</p>
        <p class="text-base md:text-xl font-bold text-[#e3f3fd] text-semibold">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
