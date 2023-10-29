import { useReceiptCalculator } from "../receiptCalculator"
import { ref, type Ref } from "vue"

vi.mock('~/utils/parseReceiptEntry')
vi.mock('~/utils/determineApplicableTaxes')
vi.mock('~/utils/calculateTax')

describe('useReceiptCalculator', () => {
  const parseReceiptEntryMock = vi.fn().mockReturnValue({
    baseCost: 1.00,
    quantity: 1,
    description: 'test parse'
  })
  const determineApplicableTaxesMock = vi.fn().mockReturnValue({
    basicSalesTax: true,
    importSalesTax: false
  })
  const calculateTaxMock = vi.fn().mockReturnValue(0.10)

  beforeEach(async () => {
    const parseReceiptEntryModule = await import('~/utils/parseReceiptEntry')
    parseReceiptEntryModule.default = parseReceiptEntryMock
    const determineApplicableTaxesModule = await import('~/utils/determineApplicableTaxes')
    determineApplicableTaxesModule.default = determineApplicableTaxesMock
    const calculateTaxModule = await import('~/utils/calculateTax')
    calculateTaxModule.default = calculateTaxMock
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('evaluateReceipt', () => {
    test('returns items and calls util functions', () => {
      const input: Ref<string[]> = ref(['test item'])
      const { evaluatedItems } = useReceiptCalculator(input)

      expect(evaluatedItems.value).toHaveLength(1)
      expect(parseReceiptEntryMock).toHaveBeenCalledOnce()
      expect(determineApplicableTaxesMock).toHaveBeenCalledOnce()
      expect(calculateTaxMock).toHaveBeenCalledOnce()
    })

    test('returns items with length equal to input and calls util functions for each input item', () => {
      const input: Ref<string[]> = ref(['first item', 'second item', 'third item'])
      const { evaluatedItems } = useReceiptCalculator(input)

      expect(evaluatedItems.value).toHaveLength(input.value.length)
      expect(parseReceiptEntryMock).toHaveBeenCalledTimes(input.value.length)
      expect(determineApplicableTaxesMock).toHaveBeenCalledTimes(input.value.length)
      expect(calculateTaxMock).toHaveBeenCalledTimes(input.value.length)
    })

    test('return includes original input', () => {
      const input: Ref<string[]> = ref(['first item', 'second item', 'third item'])
      const { evaluatedItems } = useReceiptCalculator(input)

      expect(evaluatedItems.value.map(item => item.originalInput)).toEqual(input.value)
    })
  })
})