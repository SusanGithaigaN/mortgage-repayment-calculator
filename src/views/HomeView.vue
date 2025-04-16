<script setup lang="ts">
import InputField from './InputField.vue';
import RadioGroup from './RadioGroup.vue';
import ResultDisplay from './ResultDisplay.vue';
</script>

<template>
  <main class="flex justify-center items-center h-screen">
    <div class="flex justify-center items-center bg-white rounded-2xl">
      <div class="flex flex-wrap md:flex-nowrap">
        <!-- Column 1 -->
        <div class="w-full text-base py-4 px-6">
          <div class="flex justify-between items-center gap-6 w-full">
            <p class="text-slate-900 font-bold text-base md:text-2xl whitespace-nowrap">
              Mortgage Calculator
            </p>
            <p class="text-slate-500 underline underline-offset-4 drop-shadow-md font-semibold">
              Clear All
            </p>
          </div>
          <form>
            <InputField
              label="Mortgage Amount"
              id="amount"
              type="text"
              name="amount"
              errorId="amount-error"
              errorMessage="Please enter a valid amount"
            >
              <template #prefix>
                <p class="inline-flex items-center py-3 px-4 accent-slate font-extrabold">€</p>
              </template>
            </InputField>
            <div class="flex flex-wrap -mx-3">
              <InputField
                label="Mortgage Term"
                id="term"
                type="text"
                name="term"
                errorId="term-error"
                errorMessage="This field is required"
                class="w-full md:w-1/2 px-3 "
              />
              <InputField
                label="Interest Rate"
                id="mortgage-type"
                type="text"
                name="mortgage-type"
                errorId="mortgage-type-error"
                errorMessage="This field is required"
                class="w-full md:w-1/2 px-3"
              />
            </div>
            <RadioGroup
              :options="[
                { label: 'Repayment', value: 'repayment' },
                { label: 'Interest Only', value: 'interest-only' }
              ]"
              name="mortgage-type"
              errorId="query-type-error"
              errorMessage="Please select a query type"
            />
          </form>
        </div>
        <!-- Column 2 -->
        <ResultDisplay
          imageSrc="/src/assets/images/illustration-empty.svg"
          title="Results shown here"
          description="Complete the form and click 'calculate repayments' to see your monthly repayments."
        />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
