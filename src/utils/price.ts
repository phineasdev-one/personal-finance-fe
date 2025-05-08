const PRICE_PATTERN = /\B(?=(\d{3})+(?!\d))/g;

export function formatPrice(
  price: number | undefined,
  options?: {
    hasCurrencySymbol: boolean;
  },
) {
  if (typeof price !== 'number') {
    return '';
  }

  const formattedPrice = Math.floor(price).toString().replace(PRICE_PATTERN, ',');

  return `${options?.hasCurrencySymbol ? 'VNĐ ' : ''}${formattedPrice}`;
}
