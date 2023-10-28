import parseReceiptEntry from "../parseReceiptEntry"

describe('parseReceiptEntry', () => {
  test.each([
    { input: '1 book at 12.49', expectedQuantity: 1 },
    { input: '2 books at 12.49', expectedQuantity: 2 },
    { input: '-1 books at 12.49', expectedQuantity: -1 },
    { input: '0 imported bottles of perfume at 27.99', expectedQuantity: 0 },
    { input: 'error imported bottles of perfume at 27.99', expectedQuantity: NaN },
    { input: 'books at 12.49', expectedQuantity: NaN },
  ])('parseReceiptEntry given $input parses quantity=$expectedQuantity', ({ input, expectedQuantity }) => {
    expect(parseReceiptEntry(input).quantity).toEqual(expectedQuantity)
  })

  test.each([
    { input: '1 book at 12.49', expectedBaseCost: 12.49 },
    { input: '1 imported bottle of perfume at 27.99', expectedBaseCost: 27.99 },
    { input: '1 imported bottle of perfume at 28', expectedBaseCost: 28 },
    { input: '1 book at error', expectedBaseCost: NaN },
    { input: '1 book at', expectedBaseCost: NaN },
  ])('parseReceiptEntry given $input parses baseCost=$expectedBaseCost', ({ input, expectedBaseCost }) => {
    expect(parseReceiptEntry(input).baseCost).toEqual(expectedBaseCost)
  })
})