<script setup lang="ts">
import { useAttrs } from "vue";

const props = defineProps<{
  prefix: string;
  label: string;
  id: string;
  type: string;
  name: string;
  errorId: string;
  errorMessage: string;
  value?: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const attrs = useAttrs();

// validate user input typeof == number || decimal
function validateNumberInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const regex = /^\d*\.?\d*$/;
  if (!regex.test(input.value)) {
    input.value = input.value.replace(/[^0-9.]/g, "");
    input.value = input.value.replace(/(\..*?)\..*/g, "$1");
  }
  emit("update:modelValue", input.value);
}
</script>

<template>
  <div class="w-full py-4">
    <label class="block tracking-wide text-base mb-2 text-slate-500" :for="id">
      {{ label }}
    </label>

    <div
      class="flex w-full border border-slate-400 rounded-md focus-within:border-[#d7da2f] overflow-hidden"
    >
      <div
        v-if="prefix"
        class="flex items-center px-4 accent-slate text-slate-700 font-semibold text-base"
      >
        {{ prefix }}
      </div>
      <input
        v-bind="attrs"
        class="flex-grow w-full p-3 text-base leading-tight focus:outline-none bg-white"
        :id="id"
        :type="type"
        :name="name"
        :value="modelValue"
        @input="validateNumberInput"
      />
      <div
        v-if="value"
        class="flex items-center px-4 accent-slate text-slate-700 font-semibold text-base"
      >
        {{ value }}
      </div>
    </div>

    <span :id="errorId" class="text-[hsl(4, 69%, 50%)] hidden">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped></style>
