<script setup lang="ts">
const props = defineProps<{
  options: { label: string; value: string }[];
  name: string;
  errorId: string;
  errorMessage: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

function updateSelection(value: string) {
  emit("update:modelValue", value);
}
</script>

<template>
  <div class="flex flex-wrap -mx-3">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="w-full py-2 px-3 mb-6 border border-slate-400 hover:border-[#d7da2f] hover:bg-[#fbfbe9] rounded-md mx-3"
    >
      <div class="flex justify-center items-center radio-container p-2">
        <input
          type="radio"
          class="mr-2 custom-radio"
          :id="`radio-${index}`"
          :name="name"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="updateSelection(option.value)"
        />
        <span
          :id="`label-${index}`"
          class="block w-full leading-tight text-slate-900 font-semibold"
        >
          {{ option.label }}
        </span>
      </div>
    </div>
    <span :id="errorId" class="text-accentRed hidden">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped>
.custom-radio:checked {
  accent-color: #d7da2f;
}
</style>
