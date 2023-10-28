/*
 * I'm mentally treat this file as a temp backend+database.
 * This could theoretically be a static file or something else.
 * The purpose is to make 
 */

// "Database"
const exceptions: Record<string, string[]> = {
  books: [
    'book',
    'books',
  ],
  food: [
    'chocolate',
    'chocolates',
  ],
  'medical products': [
    'headache pills'
  ]
}

// "API functions"
function exceptionTermList(): string[] {
  return Object.values(exceptions).flat()
}

export default {
  exceptionTermList
}