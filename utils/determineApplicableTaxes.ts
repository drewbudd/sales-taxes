import type { ApplicableTaxes } from "~/types/applicable-taxes";

const IMPORT_IDENTIFIER = 'imported'

export default function (description: string): ApplicableTaxes {
  return {
    basicSalesTax: false,
    importSalesTax: description.includes(IMPORT_IDENTIFIER)
  }
}