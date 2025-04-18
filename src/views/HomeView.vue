<script setup lang="ts">
import { ref } from "vue";
import InputField from "./InputField.vue";
import RadioGroup from "./RadioGroup.vue";
import ResultDisplay from "./ResultDisplay.vue";
// import RadioButton from "./RadioButton.vue";
import ResultPlaceholder from "./ResultPlaceholder.vue";

// mortgage calculations
const amount = ref("");
const term = ref("");
const interestRate = ref("");
const mortgageType = ref("");
const monthlyPayment = ref<number | null>(null);
const totalPayment = ref<number | null>(null);

//Calculate mrtgage repayments
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

// Clear form contents
function clearForm() {
  amount.value = "";
  term.value = "";
  interestRate.value = "";
  mortgageType.value = "";
  monthlyPayment.value = null;
  totalPayment.value = null;
}
</script>

<template>
  <main class="flex justify-center items-center min-h-screen">
    <div
      class="flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg max-w-4xl w-full"
    >
      <div class="flex flex-wrap md:flex-nowrap gap-6 w-full">
        <!-- Column 1 -->
        <div class="w-full text-base py-4 px-6">
          <div class="flex justify-between items-center gap-6 w-full">
            <p class="text-slate-900 font-bold text-base md:text-2xl whitespace-nowrap">
              Mortgage Calculator
            </p>
            <p
              class="text-slate-500 underline underline-offset-4 drop-shadow-md font-semibold cursor-pointer focus:text-slate-500"
              @click="clearForm"
            >
              Clear All
            </p>
          </div>
          <form>
            <InputField
              v-model="amount"
              prefix="€"
              label="Mortgage Amount"
              id="amount"
              type="text"
              name="amount"
              errorId="amount-error"
              errorMessage="Please enter a valid amount"
              class="flex flex-col gap-2"
            >
            </InputField>
            <div class="flex flex-wrap -mx-3">
              <InputField
                v-model="term"
                prefix=""
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
                prefix=""
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
            <button
              type="button"
              class="flex flex-row gap-2 rounded-full cursor-pointer bg-[#d7da2f] py-2 px-8 w-fit hover:bg-[#e1e442]"
              @click="calculateRepayments"
            >
              <img
                class="img-fluid h-6"
                alt="calculate"
                src="../assets/images/icon-calculator.svg"
              />

              Calculate Repayments
            </button>
          </form>
        </div>
        <!-- Column 2 -->
        <ResultPlaceholder
          v-if="monthlyPayment === null && totalPayment === null"
          imageSrc="/src/assets/images/illustration-empty.svg"
          title="Results shown here"
          description="Complete the form and click 'calculate repayments' to see your monthly repayments."
        />
        <ResultDisplay
          v-else
          monthlyPay="Your results"
          exResults="Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again."
          mrp="Your monthly repayments"
          :title="`£${monthlyPayment!.toLocaleString(undefined, { minimumFractionDigits: 2 })}`"
          tots="Total you'll repay over the term: "
          :description="`£${totalPayment!.toLocaleString(undefined, { minimumFractionDigits: 2 })}`"
        />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
