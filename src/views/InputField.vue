<script setup lang="ts">
defineProps(['label', 'id', 'type', 'name', 'errorId', 'errorMessage']);
</script>

<template>
  <div class="w-full py-4">
    <label class="block tracking-wide text-base mb-2 text-slate-500" :for="id">
      {{ label }}
    </label>
    <div class="flex items-center custom-border user-input rounded-md border border-slate-400 focus:border-amber-200">
      <slot name="prefix"></slot>
      <input
        class="appearance-none block w-full p-3 font-bold text-base leading-tight focus:outline-none"
        :id="id"
        :type="type"
        :name="name"
      />
    </div>
    <span :id="errorId" class="text-[hsl(4, 69%, 50%)] hidden">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped></style>
