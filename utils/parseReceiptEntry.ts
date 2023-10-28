import type { ReceiptEntry } from "~/types/receipt-entry";

/*
 * Parser for string formated receipt entries.
 *
 * Format assumptions:
 * (quantity: number[int]) (description: string) at (baseCost: number[float])
 */
export default function (entry: string): ReceiptEntry {
  let description: string = ''
  let baseCost: number = NaN
  let quantity: number = NaN

  const entryParts = entry.split(' ')
  // remove and save quantity
  quantity = parseInt(entryParts.splice(0, 1)[0])
  // remove 'at {cost}' and save cost
  baseCost = parseFloat(entryParts.splice(entryParts.length - 2, 2)[1])
  // join remaining parts with ' ' and save to description
  description = entryParts.join(' ')

  return {
    description,
    baseCost,
    quantity,
  }
}