<template>
  <div>
    <div class="flex flex-col">
      <div class="flex flex-row justify-center mt-4">
        <h1 class="text-4xl">
          Sales Tax Calculator
        </h1>
      </div>
      <div class="flex flex-row">
        <UCard class="basis-1/2 my-4 mr-2">
          <template #header>
            <h2 class="text-xl">
              Shopping Cart
            </h2>
          </template>
          <template #default>
            <UFormGroup name="receipt">
              <UTextarea v-model="formState.receipt" color="primary" variant="outline" autoresize
                placeholder="Please enter you items, e.g. 1 chocolate bar at 0.99, each on a separate line." />
            </UFormGroup>
          </template>
          <template #footer>
            <UButton block @click="submit">
              Evaluate
            </UButton>
          </template>
        </UCard>
        <UCard class="basis-1/2 my-4 ml-2">
          <template #header>
            <h2 class="text-xl">
              Receipt
            </h2>
          </template>
          <template #default>
            <template v-if="receiptTotal > 0">
              <div class="flex flex-col">
                <div class="flex flex-col divide-y divide-slate-600">
                  <div v-for="(item, index) in evaluatedItems" :key="index + item.originalInput"
                    class="flex flex-row justify-between font-mono">
                    <div>
                      {{ item.parsedEntry.quantity }} {{ item.parsedEntry.description }}:
                    </div>
                    <div>
                      {{ ((item.parsedEntry.baseCost + item.taxPerItem) * item.parsedEntry.quantity).toFixed(2) }}
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-end font-mono text-lg mt-4 pt-2 border-t-4">
                  Sales Taxes: {{ receiptTotalTax.toFixed(2) }}
                </div>
                <div class="flex flex-row justify-end font-mono text-lg">
                  Total: {{ receiptTotal.toFixed(2) }}
                </div>
              </div>
            </template>
            <template v-else>
              <div class="italic">
                Please enter your items
              </div>
            </template>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

type ReceiptForm = { receipt?: string }
const formState: Ref<ReceiptForm> = ref({
  receipt: undefined
})

const receiptInput: Ref<string[]> = ref([])
const { evaluatedItems, receiptTotalTax, receiptTotal } = useReceiptCalculator(receiptInput)

function submit() {
  if (formState.value.receipt !== undefined) {
    receiptInput.value = (formState.value.receipt.split('\n'))
      .map(entry => entry.trim())
      .filter(entry => entry.length !== 0)
  }
}
</script>
