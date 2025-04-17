<script setup lang="ts">
defineProps(["label", "id", "type", "name", "errorId", "errorMessage", "value"]);

// validate user input typeof == number || decimal
function validateNumberInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const regex = /^\d*\.?\d*$/;
  if (!regex.test(input.value)) {
    input.value = input.value.replace(/[^0-9.]/g, "");
    input.value = input.value.replace(/(\..*?)\..*/g, "$1");
  }
}
</script>

<template>
  <div class="w-full py-4">
    <label class="block tracking-wide text-base mb-2 text-slate-500" :for="id">
      {{ label }}
    </label>
    <div
      class="flex items-center rounded-md border border-slate-400 focus:border-[#d7da2f]"
    >
      <slot name="prefix"></slot>
      <div class="flex flex-row">
        <div class="input">
          <input
            class="appearance-none block w-full p-3 text-base leading-tight focus:outline-none"
            :id="id"
            :type="type"
            :name="name"
            @input="validateNumberInput"
          />
        </div>
        <div
          class="flex justify-center items-center accent-slate font-semibold text-slate-700 px-4 m-0 leading-none p-0"
          v-if="value"
        >
          {{ value }}
        </div>
      </div>
    </div>
    <span :id="errorId" class="text-[hsl(4, 69%, 50%)] hidden">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped></style>
