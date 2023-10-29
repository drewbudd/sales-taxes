import calculateTax from "../calculateTax"

describe('calculateTax', () => {
  test.each([
    { inputCost: 0.00, basicSalesTax: false, importSalesTax: false, expected: 0.00 },
    { inputCost: 0.00, basicSalesTax: true, importSalesTax: true, expected: 0.00 },
    { inputCost: 1.00, basicSalesTax: false, importSalesTax: false, expected: 0.00 },
    { inputCost: 10.33, basicSalesTax: false, importSalesTax: false, expected: 0.00 },
    { inputCost: 1.00, basicSalesTax: true, importSalesTax: false, expected: 0.10 },
    { inputCost: 0.24, basicSalesTax: true, importSalesTax: false, expected: 0.00 },
    { inputCost: 0.25, basicSalesTax: true, importSalesTax: false, expected: 0.05 },
    { inputCost: 10.33, basicSalesTax: true, importSalesTax: false, expected: 1.05 },
    { inputCost: 1.00, basicSalesTax: false, importSalesTax: true, expected: 0.05 },
    { inputCost: 0.49, basicSalesTax: false, importSalesTax: true, expected: 0.00 },
    { inputCost: 0.50, basicSalesTax: false, importSalesTax: true, expected: 0.05 },
    { inputCost: 10.33, basicSalesTax: false, importSalesTax: true, expected: 0.50 },
    { inputCost: 1.00, basicSalesTax: true, importSalesTax: true, expected: 0.15 },
    { inputCost: 0.16, basicSalesTax: true, importSalesTax: true, expected: 0.00 },
    { inputCost: 0.17, basicSalesTax: true, importSalesTax: true, expected: 0.05 },
    { inputCost: 10.33, basicSalesTax: true, importSalesTax: true, expected: 1.55 },
    { inputCost: 14.99, basicSalesTax: true, importSalesTax: false, expected: 1.50 }, // music CD
    { inputCost: 10.00, basicSalesTax: false, importSalesTax: true, expected: 0.50 }, // imported chocolates
    { inputCost: 47.50, basicSalesTax: true, importSalesTax: true, expected: 7.15 }, // imported perfume
    { inputCost: 27.99, basicSalesTax: true, importSalesTax: true, expected: 4.20 }, // imported perfume
    { inputCost: 18.99, basicSalesTax: true, importSalesTax: false, expected: 1.90 }, // perfume
    { inputCost: 11.75, basicSalesTax: false, importSalesTax: true, expected: 0.60 }, // imported chocolates
  ])('calculateTax given baseCost=$inputCost, basicSalesTax=$basicSalesTax, and importSalesTax=$importSalesTax returns tax=$expected',
    ({ inputCost, basicSalesTax, importSalesTax, expected }) => {
      expect(calculateTax(inputCost, { basicSalesTax, importSalesTax })).toEqual(expected)
    })
})