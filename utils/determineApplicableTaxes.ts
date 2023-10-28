import type { ApplicableTaxes } from "~/types/applicable-taxes";
import BaseSalesTaxExemptions from "../data/base-sales-tax-exemptions";

const IMPORT_IDENTIFIER = 'imported'

export default function (description: string): ApplicableTaxes {
  return {
    basicSalesTax: !BaseSalesTaxExemptions.exceptionTermList().some(term => description.includes(term)),
    importSalesTax: description.includes(IMPORT_IDENTIFIER)
  }
}