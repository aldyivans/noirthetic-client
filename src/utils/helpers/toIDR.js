const currency = Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
const number = Intl.NumberFormat('id-ID', { minimumFractionDigits: 0 });

export default function toIDR(v, symbol = true) {
  let modV = v;

  if (!isNaN(v)) {
    modV = symbol ? currency.format(v) : number.format(v);
  }

  return modV
}
