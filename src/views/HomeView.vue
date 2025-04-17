<script setup lang="ts">
import { ref } from "vue";
import InputField from "./InputField.vue";
import RadioGroup from "./RadioGroup.vue";
import ResultDisplay from "./ResultDisplay.vue";
import RadioButton from "./RadioButton.vue";

// mortgage calculations
const amount = ref("");
const term = ref("");
const interestRate = ref("");
const mortgageType = ref("");
const monthlyPayment = ref<number | null>(null);
const totalPayment = ref<number | null>(null);

function calculateRepayments() {
  const P = parseFloat(amount.value);
  const r = parseFloat(interestRate.value) / 100 / 12;
  const n = parseInt(term.value) * 12;

  if (!P || !r || !n) {
    alert("Please enter valid mortgage details.");
    return;
  }

  if (mortgageType.value === "repayment") {
    const M = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    monthlyPayment.value = parseFloat(M.toFixed(2));
    totalPayment.value = parseFloat((M * n).toFixed(2));
  } else if (mortgageType.value === "interest-only") {
    const M = P * r;
    monthlyPayment.value = parseFloat(M.toFixed(2));
    totalPayment.value = parseFloat((M * n + P).toFixed(2));
  }
}
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
            <p
              class="text-slate-500 underline underline-offset-4 drop-shadow-md font-semibold"
            >
              Clear All
            </p>
          </div>
          <form>
            <InputField
              v-model="amount"
              label="Mortgage Amount"
              id="amount"
              type="text"
              name="amount"
              errorId="amount-error"
              errorMessage="Please enter a valid amount"
            >
              <template #prefix>
                <p class="inline-flex items-center py-3 px-4 accent-slate font-extrabold">
                  €
                </p>
              </template>
            </InputField>
            <div class="flex flex-wrap -mx-3">
              <InputField
                v-model="term"
                label="Mortgage Term"
                id="term"
                type="text"
                name="term"
                errorId="term-error"
                errorMessage="This field is required"
                value="years"
                class="w-full md:w-1/2 px-3"
              />
              <InputField
                v-model="interestRate"
                label="Interest Rate"
                id="mortgage-rate"
                type="text"
                name="mortgage-rate"
                errorId="mortgage-rate-error"
                errorMessage="This field is required"
                value="%"
                class="w-full md:w-1/2 px-3"
              />
            </div>
            <RadioGroup
              v-model="mortgageType"
              :options="[
                { label: 'Repayment', value: 'repayment' },
                { label: 'Interest Only', value: 'interest-only' },
              ]"
              name="mortgage-type"
              errorId="query-type-error"
              errorMessage="Please select a query type"
            />
            <!-- Calculate Repayments -->
            <!-- <RadioButton title="Calculate Repayments" /> -->
            <div
              class="flex flex-row gap-2 rounded-full bg-[#d7da2f] py-2 px-8 w-fit hover:bg-[#e1e442]"
            >
              <img
                class="img-fluid h-6"
                alt="calculate"
                src="../assets/images/icon-calculator.svg"
              />
              <button type="button" @click="calculateRepayments">
                Calculate Repayments
              </button>
            </div>
          </form>
        </div>
        <!-- Column 2 -->

        <ResultDisplay
          v-if="monthlyPayment === null && totalPayment === null"
          imageSrc="/src/assets/images/illustration-empty.svg"
          title="Results shown here"
          description="Complete the form and click 'calculate repayments' to see your monthly repayments."
        />

        <ResultDisplay
          v-else
          :title="`£${monthlyPayment!.toLocaleString(undefined, {
    minimumFractionDigits: 2
  })}`"
          :description="`Total you'll repay over the term: £${totalPayment!.toLocaleString(
    undefined,
    { minimumFractionDigits: 2 }
  )}`"
          imageSrc="/src/assets/images/illustration-empty.svg"
        />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
