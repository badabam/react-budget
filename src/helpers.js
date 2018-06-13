import numeral from 'numeral'
numeral.register('locale', 'de', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  currency: {
    symbol: '€',
  },
})
numeral.locale('de')

export const formatThousands = num => numeral(num).format('0,0.00')
export const formatShort = num => numeral(num).format('0,0')
