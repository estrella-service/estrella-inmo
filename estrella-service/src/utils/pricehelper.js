import { getSeason } from './datehelper';

export const calculateTotalPrice = (data) => {
  const seasson = getSeason(data.start, data.end);
  const price = () => {
    let totalPrice = 0;
    if (data.needTowels) {
      totalPrice += 5 * data.guests;
    }
    if (data.needSheets) {
      totalPrice += 10 * data.guests;
    }
    if (data.needBabyBed) {
      totalPrice += 30;
    }
    if (seasson === 'alta') {
      totalPrice += data.priceHigh * data.days;
    }
    if (seasson === 'media') {
      totalPrice += data.priceMedium * data.days;
    }
    if (seasson === 'baja') {
      totalPrice += data.priceLow * data.days;
    }

    return totalPrice;
  };
  return price();
};
