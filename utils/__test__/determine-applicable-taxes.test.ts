import determineApplicableTaxes from "../determineApplicableTaxes"

describe('determineApplicableTaxes', () => {
  test.each([
    { input: 'book', expected: false },
    { input: 'box of chocolates', expected: false },
    { input: 'packet of headache pills', expected: false },
    { input: 'imported bottles of perfume', expected: true },
    { input: 'music CD', expected: true },
    { input: 'imported', expected: true },
  ])('determineApplicableTaxes given $input determines basicSalesTax=$expected', ({ input, expected }) => {
    expect(determineApplicableTaxes(input).basicSalesTax).toEqual(expected)
  })

  test.each([
    { input: 'book', expected: false },
    { input: 'imported bottles of perfume', expected: true },
    { input: 'import books', expected: false },
    { input: 'importedbooks', expected: true },
    { input: 'bottles imported of perfume', expected: true },
    { input: 'imported', expected: true },
  ])('determineApplicableTaxes given $input determines importSalesTax=$expected', ({ input, expected }) => {
    expect(determineApplicableTaxes(input).importSalesTax).toEqual(expected)
  })
})