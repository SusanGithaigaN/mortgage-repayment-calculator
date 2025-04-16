<script setup lang="ts"></script>

<template>
  <main class="flex justify-center items-center h-screen">
    <div class="flex justify-center items-center bg-white rounded-2xl">
      <div class="flex flex-wrap md:flex-nowrap">
        <!-- Column 1 -->
        <div class="w-full t ext-base py-4 px-6">
          <!-- Occupy entire content width -->
          <div class="flex justify-between items-center gap-6 w-full">
            <p class="text-slate-900 font-bold text-base md:text-2xl whitespace-nowrap">
              Mortgage Calculator
            </p>
            <p
              class="text-slate-500 underline underline-offset-4 drop-shadow-md font-semibold whitespace-nowrap"
            >
              Clear All
            </p>
          </div>
          <!-- form  -->
          <form>
            <!-- mortgage amount -->
            <div class="w-full py-4">
              <label
                class="block tracking-wide text-base mb-2 text-slate-500"
                for="amount"
              >
                Mortgage Amount
              </label>
              <div class="flex items-center custom-border user-input rounded-md border">
                <p class="inline-flex items-center py-3 px-4 rounded-md accent-slate">€</p>
                <input
                  class="appearance-none block w-full p-3 font-bold text-base leading-tight focus:outline-none focus:ring-0 hover:outline-none"
                  id="amount"
                  type="text"
                  name="amount"
                />
              </div>
              <span id="amount-error" class="text-[hsl(4, 69%, 50%)] hidden"
                >Please enter a valid amount</span
              >
            </div>

            <!-- Term & Interest rate -->
            <div class="flex flex-wrap -mx-3">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block tracking-wide text-base mb-2 text-slate-500"
                  for="term"
                >
                  Mortgage Term
                </label>
                <!-- border border-lightGreen focus:border-mediumGreen -->
                <input
                  class="custom-border appearance-none block w-full rounded-md border py-3 px-4 mb-3 leading-tight"
                  id="term"
                  type="text"
                  name="term"
                />
                <span id="term-error" class="text-[hsl(4, 69%, 50%)] hidden"
                  >This field is required</span
                >
              </div>

              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block tracking-wide text-base mb-2 text-slate-500"
                  for="mortgage-type"
                >
                  Interest Rate
                </label>
                <input
                  class="appearance-none block w-full rounded-md border border-darkGray hover:border-mediumGreen py-3 px-4 mb-3 leading-tight"
                  id="mortgage-type"
                  type="text"
                  name="mortgage-type"
                />
                <span id="mortgage-type-error" class="text-[hsl(4, 69%, 50%)] hidden"
                  >This field is required</span
                >
              </div>
            </div>

            <!-- Mortgage type -->
            <div class="flex flex-wrap -mx-3">
              <div class="w-full px-3 mb-6 md:mb-0">
                <label
                  class="block tracking-wide text-base mb-2 text-slate-500"
                  for="grid-query-type"
                >
                  Mortgage Type
                </label>
                <div class="flex flex-wrap -mx-3">
                  <div class="relative w-full py-2 px-3 mb-6">
                    <div class="radio-container">
                      <input
                        type="radio"
                        class="accent-mediumGreen"
                        id="green-radio-1"
                        name="query-type"
                        value="general"
                      />
                      <span
                        id="grid-query-type-1"
                        class="block w-full leading-tight text-slate-900 font-semibold selection"
                      >
                        Repayment
                      </span>
                    </div>
                    <span id="query-type-1-error" class="text-accentRed hidden"
                      >This field is required</span
                    >
                  </div>

                  <div class="relative w-full py-2 px-3 mb-6">
                    <div class="radio-container">
                      <input
                        type="radio"
                        class="accent-mediumGreen"
                        id="green-radio-2"
                        name="query-type"
                        value="specific"
                      />
                      <span
                        id="grid-query-type-2"
                        class="block w-full leading-tight text-slate-900 font-semibold selection"
                      >
                        Interest Only
                      </span>
                    </div>
                  </div>
                </div>
                <span id="query-type-error" class="text-accentRed hidden"
                  >Please select a query type</span
                >
              </div>
            </div>
          </form>
        </div>
        <!-- Column 2 -->
        <div class="w-full px-4 bg-slate-900 rounded-bl-4xl text-center py-[10%]">
          <div class="flex justify-center items-center">
            <img
              src="/src/assets/images/illustration-empty.svg"
              alt="Mortgage Calculator"
              class="img-fluid justify-center py-4"
            />
          </div>
          <p class="w-full whitespace-nowrap text-white font-bold text-base md:text-xl">
            Results shown here
          </p>
          <p class="text-base text-slate-300 text-semibold">
            Complete the form and click “calculate repayments” to see what your monthly
            repayments would be.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
