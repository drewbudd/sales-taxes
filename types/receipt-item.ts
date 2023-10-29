import type { ApplicableTaxes } from "./applicable-taxes";
import type { ReceiptEntry } from "./receipt-entry";

export type ReceiptItem = {
  originalInput: string;
  taxPerItem: number;
  parsedEntry: ReceiptEntry;
  applicableTaxes: ApplicableTaxes;
}