import type { ApplicableTaxes } from "~/types/applicable-taxes";

const BASIC_SALES_TAX_RATE = 0.1
const IMPORT_SALES_TAX_RATE = 0.05

export default function calculateTax(baseCost: number, applicableTaxes: ApplicableTaxes): number {
  const taxRate = (applicableTaxes.basicSalesTax ? BASIC_SALES_TAX_RATE : 0)
    + (applicableTaxes.importSalesTax ? IMPORT_SALES_TAX_RATE : 0)
  return parseFloat((Math.round(((baseCost * taxRate) * 100) / 5) * 0.05).toFixed(2))
}