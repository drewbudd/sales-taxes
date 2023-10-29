import { useReceiptCalculator } from "../receiptCalculator"
import { ref, type Ref } from "vue"

describe('useReceiptCalculator', () => {
  test.each([
    { input: [], expectedSalesTax: 0, expectedTotal: 0 },
    {
      input: [
        '1 book at 12.49',
        '1 music CD at 14.99',
        '1 chocolate bar at 0.85'
      ], expectedSalesTax: 1.50, expectedTotal: 29.83
    },
    {
      input: [
        '1 imported box of chocolates at 10.00',
        '1 imported bottle of perfume at 47.50'
      ], expectedSalesTax: 7.65, expectedTotal: 65.15
    },
    {
      input: [
        '1 imported bottle of perfume at 27.99',
        '1 bottle of perfume at 18.99',
        '1 packet of headache pills at 9.75',
        '1 box of imported chocolates at 11.25'
      ], expectedSalesTax: 6.70, expectedTotal: 74.68
    }
  ])('given $input it calculates salesTax=$expectedSalesTax and total=$expectedTotal',
    ({ input, expectedSalesTax, expectedTotal }) => {
      const { receiptTotalTax, receiptTotal } = useReceiptCalculator(ref(input))

      expect(receiptTotalTax.value).toEqual(expectedSalesTax)
      expect(receiptTotal.value).toEqual(expectedTotal)
    }
  )
})