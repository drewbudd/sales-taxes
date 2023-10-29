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

  test.each([
    { input: '1 book at 12.49', expectedDescription: 'book' },
    { input: '1 music CD at 14.99', expectedDescription: 'music CD' },
    { input: '1 chocolate bar at 0.85', expectedDescription: 'chocolate bar' },
    { input: '1 imported box of chocolates at 10.00', expectedDescription: 'imported box of chocolates' },
    { input: '1 imported bottle of perfume at 47.50', expectedDescription: 'imported bottle of perfume' },
    { input: '1 imported bottle of perfume at 27.99', expectedDescription: 'imported bottle of perfume' },
    { input: '1 bottle of perfume at 18.99', expectedDescription: 'bottle of perfume' },
    { input: '1 packet of headache pills at 9.75', expectedDescription: 'packet of headache pills' },
    { input: '1 box of imported chocolates at 11.25', expectedDescription: 'box of imported chocolates' },
  ])('parseReceiptEntry given $input parses description=$expectedDescription', ({ input, expectedDescription }) => {
    expect(parseReceiptEntry(input).description).toEqual(expectedDescription)
  })

  test.each([
    { input: '1 book at 12.49', expected: { quantity: 1, baseCost: 12.49, description: 'book' } },
    { input: '1 music CD at 14.99', expected: { quantity: 1, baseCost: 14.99, description: 'music CD' } },
    { input: '1 imported box of chocolates at 10.00', expected: { quantity: 1, baseCost: 10.00, description: 'imported box of chocolates' } },
    { input: '0 chocolate bars at 0.85', expected: { quantity: 0, baseCost: 0.85, description: 'chocolate bars' } },
    { input: '-1 item name b*//a', expected: { quantity: -1, baseCost: NaN, description: 'item' } },
  ])('parseReceiptEntry parses $input as expected', ({ input, expected }) => {
    expect(parseReceiptEntry(input)).toEqual(expected)
  })
})