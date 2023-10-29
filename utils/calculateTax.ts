import type { ApplicableTaxes } from "~/types/applicable-taxes";

const BASIC_SALES_TAX_RATE = 10
const IMPORT_SALES_TAX_RATE = 5

export default function calculateTax(baseCost: number, applicableTaxes: ApplicableTaxes): number {
  const taxRate = (applicableTaxes.basicSalesTax ? BASIC_SALES_TAX_RATE : 0)
    + (applicableTaxes.importSalesTax ? IMPORT_SALES_TAX_RATE : 0)
  return parseFloat((Math.ceil((baseCost * taxRate) / 5) * 0.05).toFixed(2))
}