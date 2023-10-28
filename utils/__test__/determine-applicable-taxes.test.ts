import determineApplicableTaxes from "../determineApplicableTaxes"

describe('determineApplicableTaxes', () => {
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