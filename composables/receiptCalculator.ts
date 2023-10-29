import { type Ref, ref, watchEffect } from "vue";
import type { ReceiptItem } from "~/types/receipt-item";
import calculateTax from "~/utils/calculateTax";
import determineApplicableTaxes from "~/utils/determineApplicableTaxes";
import parseReceiptEntry from "~/utils/parseReceiptEntry";

export function useReceiptCalculator(input: Ref<string[]>) {
  const evaluatedItems: Ref<ReceiptItem[]> = ref([])
  const receiptTotalTax: Ref<number> = ref(0)

  const evaluateReceipt = (items: Ref<string[]>) => {
    evaluatedItems.value = items.value
      .map((item): ReceiptItem => {
        const parsedEntry = parseReceiptEntry(item)
        const applicableTaxes = determineApplicableTaxes(parsedEntry.description)
        const taxPerItem = calculateTax(parsedEntry.baseCost, applicableTaxes)

        return {
          originalInput: item,
          parsedEntry,
          applicableTaxes,
          taxPerItem
        }
      })
    receiptTotalTax.value = evaluatedItems.value.map(
      item => item.parsedEntry.quantity * item.taxPerItem
    ).reduce((acc, currentValue) => acc + currentValue)
  }

  watchEffect(() => {
    evaluateReceipt(input)
  })

  return { evaluatedItems, receiptTotalTax }
}