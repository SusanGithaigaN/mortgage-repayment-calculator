<script setup lang="ts">
defineProps(['options', 'name', 'errorId', 'errorMessage']);
</script>

<template>
  <div class="flex flex-wrap -mx-3">
    <div v-for="(option, index) in options" :key="index" class="w-full py-2 px-3 mb-6 border border-slate-400 rounded-md mx-3">
      <div class="flex items-start radio-container">
        <input
          type="radio"
          class="accent-mediumGreen mr-2 focus:text-amber-200"
          :id="`radio-${index}`"
          :name="name"
          :value="option.value"
        />
        <span :id="`label-${index}`" class="block w-full leading-tight text-slate-900 font-semibold">
          {{ option.label }}
        </span>
      </div>
    </div>
    <span :id="errorId" class="text-accentRed hidden">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped></style>
