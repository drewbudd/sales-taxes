import { type Ref, ref, watchEffect, toValue } from "vue";
import type { ReceiptItem } from "~/types/receipt-item";
import calculateTax from "~/utils/calculateTax";
import determineApplicableTaxes from "~/utils/determineApplicableTaxes";
import parseReceiptEntry from "~/utils/parseReceiptEntry";

export function useReceiptCalculator(input: Ref<string[]>) {
  const evaluatedItems: Ref<ReceiptItem[]> = ref([])
  const receiptTotalTax: Ref<number> = ref(0)
  const receiptTotal: Ref<number> = ref(0)

  const evaluateReceipt = () => {
    evaluatedItems.value = toValue(input)
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
    if (evaluatedItems.value.length > 0) {
      receiptTotalTax.value = parseFloat(evaluatedItems.value.map(
        item => item.parsedEntry.quantity * item.taxPerItem
      ).reduce((acc, currentValue) => acc + currentValue).toFixed(2))
      receiptTotal.value = parseFloat((evaluatedItems.value.map(
        item => item.parsedEntry.quantity * item.parsedEntry.baseCost
      ).reduce((acc, currentValue) => acc + currentValue) + receiptTotalTax.value).toFixed(2))
    }
  }

  watchEffect(() => {
    evaluateReceipt()
  })

  return { evaluatedItems, receiptTotalTax, receiptTotal }
}